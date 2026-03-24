import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Borlabs from '../../components/shared/Borlabs';
import Footer from '../../components/shared/Footer';
import Headers from '../../components/shared/Header';
import SocialMedia from '../../components/shared/SocialMedia';
import "./style.css";
import { Col, Row } from 'reactstrap';
import { checkSlotAvailability, submitRegistration } from './api';

const zones = [
    'Bodinga Zone',
    'GORONYO Zone',
    'GWADABAWA Zone',
    'Sokoto South Zone',
    'Sokoto North Zone',
    'Yabo Zone',
];

const competitionOptions = [
    'Spelling Bee Competition',
    'Read Aloud/ Debate Competition',
];

const schoolTypes = ['Public School', 'Private School'];
const educationLevels = ['Primary', 'JSS', 'SS'];

const slotLimits = {
    'Primary School': { 'Public School': 5, 'Private School': 3 },
    JSS: { 'Public School': 6, 'Private School': 3 },
    SS: { 'Public School': 5, 'Private School': 3 },
};

// ✅ Step labels
const stepLabels = [
    "Start",
    "Competition",
    "Zone",
    "School Type",
    "Education",
    "Form",
    "Done"
];

const buttonStyle = {
    backgroundColor: "#218838",
    color: "white",
    padding: "12px",
    //   fontSize: "18px",
    border: "none",
    borderRadius: "10px",
    float: "right",
    cursor: "pointer",
    transition: "background 0.3s",
    width: "30%",
};
const ReadToLeadRegistration = () => {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({
        competition: '',
        zone: '',
        schoolType: '',
        educationLevel: '',
    });

    const [formData, setFormData] = useState({
        studentName: '',
        age: '',
        gender: '',
        schoolName: '',
        classGrade: '',
        lga: '',
        phoneNumber: '',
        schoolEmail: '',
        teacherName: '',
        teacherPhone: '',
    });

    const [error, setError] = useState('');
    const [slotMessage, setSlotMessage] = useState('');
    const [slotsRemaining, setSlotsRemaining] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ Progress calculation
    const totalSteps = stepLabels.length;
    const progress = ((step - 1) / (totalSteps - 1)) * 100;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (slotMessage) return;

        const required = Object.keys(formData);
        for (const key of required) {
            if (!formData[key]?.trim()) {
                setError('Please fill all required fields.');
                setLoading(false);
                return;
            }
        }

        const newItem = {
            ...selection,
            ...formData,
            createdAt: new Date().toISOString(),
        };

        try {
            let res = await submitRegistration(newItem);
            if (res.data.status === "success") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                setStep(7);
            } else {
                setError(res.data.message || "Submission failed");
            }
            setLoading(false);
        } catch (err) {
            console.log(err)
            setError(err.response?.data?.message || "Submission failed");
            setLoading(false);
        }

    };

    const renderButtons = (options, keyName) => (
        <div className="select-group">
            {options.map((opt) => (
                <button
                    key={opt}
                    className={`select-btn ${selection[keyName] === opt ? 'active' : ''}`}
                    onClick={() => setSelection((s) => ({ ...s, [keyName]: opt }))}
                >
                    <span style={{ textTransform: "uppercase" }}>{opt}</span>
                    {selection[keyName] === opt && <span>✓</span>}
                </button>
            ))}
        </div>
    );

    useEffect(() => {
        if (!selection) return;

        checkSlotAvailability(selection)
            .then(res => {
                if (res.data.available === false) {
                    setSlotMessage("Registration for this category in your zone is full.");
                    setSlotsRemaining(0); // optional: clear slots
                } else {
                    setSlotMessage("");
                    setSlotsRemaining(res.data.remainingSlots);
                }
            })
            .catch(err => console.error(err));
    }, [selection.educationLevel]);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="container">
                        <h2>Welcome to Read to Lead Campaign – Sokoto registration system</h2>
                        <p>Click below to start registration</p>
                        <button className="button" style={buttonStyle} onClick={() => setStep(2)}>Start</button>
                    </div>
                );

            case 2:
                return (
                    <div className="container">
                        <h2>Select Competition</h2>
                        {renderButtons(competitionOptions, 'competition')}
                        <div className="button-graoup">
                            <button className="button" style={buttonStyle} disabled={!selection.competition} onClick={() => setStep(3)}>Next</button>
                        </div>
                    </div>
                );

            case 3:
                return (
                    <div className="container">
                        <h2>Select Zone</h2>
                        {renderButtons(zones, 'zone')}
                        <div className="button-group">
                            <button className="button secondary" onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                                setStep(2)
                            }}>Back</button>
                            <button className="button" disabled={!selection.zone} onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                                setStep(4)
                            }}>Next</button>

                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="container">
                        <h2>School Type</h2>
                        {renderButtons(schoolTypes, 'schoolType')}
                        <div className="button-group">
                            <button className="button secondary" onClick={() => { setStep(3) }}>Back</button>
                            <button className="button" disabled={!selection.schoolType} onClick={() => setStep(5)}>Next</button>

                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="container">
                        <h2>Education Level</h2>
                        {renderButtons(educationLevels, 'educationLevel')}
                        {slotsRemaining !== null && (
                            <p>
                                {slotMessage ? (
                                    <span style={{ color: "red" }}>{slotMessage}</span>
                                ) : (
                                    `Remaining Slots: ${slotsRemaining}`
                                )}
                            </p>
                        )}                        <div className="button-group">
                            <button className="button secondary" onClick={() => setStep(4)}>Back</button>
                            <button className="button" disabled={!selection.educationLevel || slotsRemaining <= 0} onClick={() => setStep(6)}>Next</button>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="container">
                        <h2>Registration Form</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    {/* School Name */}
                                    <label>
                                        School Name
                                        <input
                                            type="text"
                                            placeholder="Enter school name"
                                            value={formData.schoolName}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, schoolName: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                                <Col>
                                    {/* Full Name */}
                                    <label>
                                        Student Name
                                        <input
                                            type="text"
                                            placeholder="Enter student name"
                                            value={formData.studentName}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, studentName: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label>
                                        Age
                                        <input
                                            type="number"
                                            placeholder="Age"
                                            value={formData.age}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, age: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                                <Col>

                                    <label>
                                        Gender
                                        <select
                                            value={formData.gender}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, gender: e.target.value }))
                                            }
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </label>
                                </Col>

                            </Row>
                            <Row>

                                <Col>
                                    {/* Class/Grade */}
                                    <label>
                                        Class/Grade
                                        <input
                                            type="text"
                                            placeholder="Enter class or grade"
                                            value={formData.classGrade}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, classGrade: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                                <Col>
                                    {/* Guardian Name */}
                                    <label>
                                        LGA (Local Government Area)
                                        <input
                                            type="text"
                                            placeholder="Enter LGA"
                                            value={formData.lga}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, lga: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    {/* Phone and Email Row */}
                                    <label>
                                        Phone Number
                                        <input
                                            type="number"
                                            placeholder="Enter phone number"
                                            value={formData.phoneNumber}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, phoneNumber: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                                <Col>
                                    <label>
                                        School's Email
                                        <input
                                            type="email"
                                            placeholder="Enter school's email"
                                            value={formData.schoolEmail}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, schoolEmail: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                            </Row>
                            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                                <strong className='form-label' >Teacher Information</strong>

                            </div>
                            <Row>
                                <Col>
                                    <label>
                                        Teacher's Name
                                        <input
                                            type="text"
                                            placeholder="Enter teacher's name"
                                            value={formData.teacherName}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, teacherName: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                                <Col>
                                    <label>
                                        Teacher's Phone Number
                                        <input
                                            type="text"
                                            placeholder="Enter teacher's phone number"
                                            value={formData.teacherPhone}
                                            onChange={(e) =>
                                                setFormData((f) => ({ ...f, teacherPhone: e.target.value }))
                                            }
                                        />
                                    </label>
                                </Col>
                            </Row>
                            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                                <strong className='form-label' >Competition Information</strong>

                            </div>
                            <Row>
                                <Col>
                                    <label>
                                        Competition Type
                                        <input
                                            type="text"
                                            placeholder="Enter competition type"
                                            value={selection.competition}
                                            readOnly

                                        />
                                    </label>
                                </Col>
                                <Col>

                                    <label>
                                        Zone
                                        <input
                                            type="text"
                                            placeholder="Enter zone "
                                            value={selection.zone}
                                            readOnly

                                        />
                                    </label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>
                                        School Type
                                        <input
                                            type="text"
                                            placeholder="Enter school type"
                                            value={selection.schoolType}
                                            readOnly

                                        />
                                    </label>
                                </Col>
                                <Col>

                                    <label>
                                        Education Level
                                        <input
                                            type="text"
                                            placeholder="Enter education level "
                                            value={selection.educationLevel}
                                            readOnly

                                        />
                                    </label>
                                </Col>
                            </Row>

                            <br />

                            {error && <p className="error">{error}</p>}
                            <div className="button-group" style={{ width: "100%" }}>
                                <button className="button secondary" onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });
                                    setStep(5)
                                }}>Back</button>
                                <button type="submit" className="button">{loading ? "Submitting..." : "Submit"}</button>
                            </div>
                        </form>
                    </div>
                );

            case 7:
                return (
                    <div className="container">
                        <h2>Success</h2>
                        <p>Your registration has been submitted successfully!</p>
                        <button className="button" style={buttonStyle} onClick={() => navigate('/')}>Home</button>
                    </div>
                );

            default:
                return null;
        }
    };


    return (
        <>
            <Headers />
            {/* ✅ Stepper + Progress */}
            {step !== 7 && (
                <div className="stepper-container">
                    <div className="stepper">
                        {stepLabels.map((label, index) => {
                            const stepNumber = index + 1;
                            return (
                                <div key={index} className="step-item">
                                    <div className={`step-circle ${step >= stepNumber ? "active" : ""}`}>
                                        {step > stepNumber ? "✓" : stepNumber}
                                    </div>
                                    {/* <span className="step-label">{label}</span> */}
                                </div>
                            );
                        })}
                    </div>

                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                </div>
            )}
            {renderStep()}
            {/* <SocialMedia /> */}
            <br />
            <br />
            <br />

            <Footer />
        </>
    );
};

export default ReadToLeadRegistration;



