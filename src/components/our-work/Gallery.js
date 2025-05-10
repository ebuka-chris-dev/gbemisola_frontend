

const Gallery = () => {

    return(
<>
<section class="gallery-slideshow">
                    <button
                      class="gallery-slider-prev slider-button circle-button circle-button-medium"
                    >
                      <i class="fa fa-prev" aria-hidden="true"></i>
                    </button>
                    <div class="gallery-slider swiper-container">
                      <div class="swiper-wrapper">
                        <div class="gallery-slider-item swiper-slide">
                          <a
                            href="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/MG_4315_JuliaGunther-scaled.jpg"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              decoding="async"
                              src="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/MG_4315_JuliaGunther-2048x1365.jpg"
                              alt="Mitarbeiterin Sophia Mohammed sitzt im Flüchtlingslager im Südsudan am Boden und hilft einem Mädchen bei ihren Rehabilitationsübungen."
                            />
                          </a>
                          <p class="gallery-slider-item-caption">
                            We help children with disabilities through cataract
                            surgery, the use of a prosthesis, the distribution
                            of glasses or physiotherapy.
                          </p>
                        </div>
                        <div class="gallery-slider-item swiper-slide">
                          <a
                            href="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/02_MerteneshIsrael_MG_7519_unbearbeitet.jpg"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              decoding="async"
                              src="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/02_MerteneshIsrael_MG_7519_unbearbeitet.jpg"
                              alt="Ein Mann sitzt vor einem Mädchen auf dem Sessel und unterhält sich mit ihr in Gebärdensprache. Sie trägt ein weißes Kleid und schaut ihn konzentriert an, während er mit einem Lächeln erklärt."
                            />
                          </a>
                          <p class="gallery-slider-item-caption">
                            We support children in their pre-literacy skills,
                            teach them sign language or equip them with
                            information and communication technologies.
                          </p>
                        </div>
                        <div class="gallery-slider-item swiper-slide">
                          <a
                            href="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/gk181002_lftw_burkina-05001-scaled.jpg"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              decoding="async"
                              src="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/gk181002_lftw_burkina-05001-2048x1536.jpg"
                              alt="Ein Lehrer in einem bunten Hemd gibt einem Jungen sein Heft im Klassenzimmer zurück."
                            />
                          </a>
                          <p class="gallery-slider-item-caption">
                            We train teachers in inclusive education.
                          </p>
                        </div>
                        <div class="gallery-slider-item swiper-slide">
                          <a
                            href="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/040_AbdiTesfaye_MG_6781_unbearbeitet.jpg"
                            target="_blank"
                            rel="noopener"
                          >
                            <img
                              decoding="async"
                              src="https://www.licht-fuer-die-welt.at/app/uploads/sites/8/2021/10/040_AbdiTesfaye_MG_6781_unbearbeitet.jpg"
                              alt="Abdi sitzt im Schoß seiner Mutter. Sie trägt ein graues T-Shirt und eine graue Leggings, er ein blaues Shirt. Der Bub zeigt mit einem Lächeln uaf einen Stift mit einer lila Plastikente, den seine Mutter hochhält."
                            />
                          </a>
                          <p class="gallery-slider-item-caption">
                            Self-confidence is increased when children with
                            disabilities can clearly communicate their wants and
                            needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      class="gallery-slider-next slider-button circle-button circle-button-medium"
                    >
                      <i class="fa fa-next" aria-hidden="true"></i>
                    </button>
                    <div class="swiper-pagination"></div>
                  </section>
</>
    )
}

export default Gallery;