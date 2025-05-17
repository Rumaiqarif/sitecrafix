'use client';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [visiblePortfolio, setVisiblePortfolio] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const togglePortfolio = (index) => {
    setVisiblePortfolio(visiblePortfolio === index ? null : index);
  };

  const brandingItems = [
    {
      title: "Logo design",
      description: "Professional and memorable brand logos.",
      price: "₹999",
      gallery: [
        "/images/logo1.webp",
        "/images/logo2.webp",
        "/images/logo3.webp",
        "/images/logo4.webp",
        "/images/logo5.webp",
        "/images/logo6.webp",
        "/images/logo7.webp",
      ]
    },
    {
      title: "Poster",
      description: "Attractive posters and banners for marketing.",
      price: "₹599",
      gallery: [
        "/images/poster1.webp",
        "/images/poster2.webp",
        "/images/poster3.webp",
        "/images/poster4.webp",
        "/images/poster5.webp",
        "/images/poster6.webp",
        "/images/poster7.webp",
      ]
    },
    {
      title: "Visiting Card",
      description: "Elegant and professional business cards.",
      price: "₹399",
      gallery: [
        "/images/card1.webp",
        "/images/card2.webp",
        "/images/card3.webp",
        "/images/card4.webp",
        "/images/card5.jpg",
        "/images/card6.jpg",
        "/images/card7.jpg"
      ]
    },
    {
      title: "Letterpad",
      description: "Custom-branded letterheads and documents.",
      price: "₹499",
      gallery: [
        "/images/letter1.webp",
        "/images/letter2.webp",
        "/images/letter3.webp",
      ]
    }
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src={darkMode ? '/images/logo-dark.png' : '/images/logo-light.png'}
            alt="SiteCrafix Logo"
            className={styles.logo}
            width={150}
            height={50}
          />
        </div>
        <button type="button" onClick={() => setDarkMode(!darkMode)} className={styles.toggleButton}>
          {darkMode ? '☀ Light ' : '🌙 Dark '}
        </button>
      </header>

      <div id="top"></div>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Crafting Stunning Websites for Your Success</h1>
          <p>Custom-built, user-friendly websites tailored for growing businesses and ambitious entrepreneurs.</p>
          <div className={styles.cta}>
            <a href="#contact" className={styles.primaryBtn}>Let&apos;s Build Together</a>
            <a href="#portfolio" className={styles.secondaryBtn}>See Our Projects</a>
          </div>
        </section>

        <section className={styles.features} id="services">
          <div className={styles.featureCard}>
            <h3>🚀 Fast</h3>
            <p>We build fast-loading, performance-optimized websites.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>📱 Mobile-Ready</h3>
            <p>Every design is fully responsive and works beautifully on all devices.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>💼 Professional</h3>
            <p>We craft designs that reflect your brand and build trust.</p>
          </div>
        </section>

        <section className={styles.about}>
          <h2>About SiteCrafix</h2>
          <p>
            At SiteCrafix, we specialize in creating websites that not only impress visually but also perform seamlessly. 
            We believe every business deserves a strong online presence—whether you&apos;re just starting out or scaling fast.
          </p>

          {!showMore && (
            <button onClick={() => setShowMore(true)} className={styles.learnMoreBtn}>
              Learn More
            </button>
          )}

          {showMore && (
            <>
              <p>
                Our team combines clean, modern design with technical excellence to deliver responsive, user-friendly websites tailored to your brand.
                From eCommerce stores to service sites and portfolios, we approach every project with creativity and attention to detail.
              </p>
              <p>
                More than just developers—we&apos;re your digital growth partners. With fast turnaround, transparent pricing, and dedicated support, 
                SiteCrafix helps turn your vision into a powerful online experience.
              </p>
              <button onClick={() => setShowMore(false)} className={styles.learnMoreBtn}>
                Show Less
              </button>
            </>
          )}
        </section>

        <section className={styles.pricingSection} id="pricing">
          <h2>Our Packages</h2>
          <div className={styles.pricingScroll}>
            <div className={styles.pricingTrack}>
              <div className={styles.pricingCard}>
                <h3>Basic</h3>
                <p>✅ 1 Page Website</p>
                <p>🌐 No Domain or Hosting</p>
                <p>🎨 Template-based design</p>
                <p>🛠 Contact Form Included</p>
                <p>📞 Basic Support</p>
                <p className={styles.price}>₹2,999</p>
              </div>
              <div className={styles.pricingCard}>
                <h3>Starter</h3>
                <p>✅ 5 Page Website</p>
                <p>🌐 Free Domain &amp; Hosting (1 year)</p>
                <p>🎨 Custom Layout &amp; Design</p>
                <p>🛠 Contact + Image Gallery</p>
                <p>📞 1-Month Free Support</p>
                <p className={styles.price}>₹7,999</p>
              </div>
              <div className={styles.pricingCard}>
                <h3>Pro</h3>
                <p>✅ Up to 10 Pages</p>
                <p>🌐 Domain + Hosting (1 year)</p>
                <p>🎨 Full Custom Design</p>
                <p>🛠 E-commerce/Booking Option</p>
                <p>📞 3-Month Free Support</p>
                <p className={styles.price}>₹11,999</p>
              </div>
              <div className={styles.pricingCard}>
                <h3>Custom</h3>
                <p>✅ Unlimited Pages</p>
                <p>🌐 Hosting &amp; Domain as per need</p>
                <p>🎨 Tailor-made UI/UX</p>
                <p>🛠 Advanced Features (Blog, Payments, etc.)</p>
                <p>📞 Priority Support</p>
                <p><a href="#contact" className={styles.contactLink}>Contact for Price</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.brandingSection} id="branding">
          <h2>Branding &amp; Design Services</h2>
          <p className={styles.brandingIntro}>
            We offer creative design solutions for your brand – from logos and business cards to promotional posters and letterheads.
          </p>

          <div className={styles.cardScroll}>
            <div className={styles.cardTrack}>
              {brandingItems.map((item, index) => (
                <div key={index} className={styles.brandCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className={styles.price}>{item.price}</p>
                  <button onClick={() => togglePortfolio(index)}>
                    {visiblePortfolio === index ? "Hide Portfolio" : "View Portfolio"}
                  </button>

                  {visiblePortfolio === index && (
                    <div className={styles.portfolioScroll}>
                      <div className={styles.portfolioTrack}>
                        {item.gallery.map((img, i) => (
                          <div key={i} className={styles.portfolioItem}>
                            <Image 
                              src={img} 
                              alt={`${item.title} ${i + 1}`}
                              width={300}
                              height={200}
                            />
                            <p>{item.title} {i + 1}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.portfolio} id="portfolio">
          <h2>Our Work</h2>
          <p className={styles.portfolioIntro}>
            Take a look at some of the websites we&apos;ve created. Whether it&apos;s for local businesses, personal brands, or online stores, each project is made with care, creativity, and performance in mind.
          </p>
          
          <div className={styles.portfolioScroll}>
            <div className={styles.portfolioGrid}>
              <div className={styles.portfolioItem}>
                <Image 
                  src="/images/honey.webp" 
                  alt="KashHoney project" 
                  width={400}
                  height={300}
                />
                <h3>KashHoney</h3>
                <p>An e-commerce site helping Kashmiri honey producers sell directly to customers with secure and fast delivery.</p>
              </div>

              <div className={styles.portfolioItem}>
                <Image 
                  src="/images/guide.webp" 
                  alt="Explore Kashmir project" 
                  width={400}
                  height={300}
                />
                <h3>Explore Kashmir</h3>
                <p>A user-friendly tourism website offering travel tips, hotel booking, and local experiences for visitors exploring Kashmir.</p>
              </div>

              <div className={styles.portfolioItem}>
                <Image 
                  src="/images/portfolio.jpg" 
                  alt="Rumaiq client site" 
                  width={400}
                  height={300}
                />
                <h3>Personal Portfolio</h3>
                <p>A clean and modern portfolio site for a full-stack developer to showcase their skills, resume, and past work.</p>
              </div>

              <div className={styles.portfolioItem}>
                <Image 
                  src="/images/groceries.webp" 
                  alt="FreshGro project" 
                  width={400}
                  height={300}
                />
                <h3>FreshGro</h3>
                <p>An online grocery delivery platform built for ease — allowing customers to order fresh fruits, vegetables, and essentials.</p>
              </div>

              <div className={styles.portfolioItem}>
                <Image 
                  src="/images/portfolio.jpg" 
                  alt="DigitalKraft project" 
                  width={400}
                  height={300}
                />
                <h3>DigitalKraft</h3>
                <p>A marketing portfolio site for a digital marketer, featuring SEO-friendly content, analytics tracking, and service inquiries.</p>
              </div>

              <div className={styles.portfolioItem}>
                <Image 
                  src="/images/servezlogo2.png" 
                  alt="ServeEZ project" 
                  width={400}
                  height={300}
                />
                <h3>ServeEZ</h3>
                <p>A full-stack web app that connects people who want to buy or offer local services like home repairs, tutoring, and more.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What Clients Say</h2>
          <p className={styles.testimonialIntro}>
            Here&apos;s what some of our satisfied clients have to say about SiteCrafix.
          </p>
          <div className={styles.testimonialScroll}>
            <div className={styles.testimonialWrapper}>
              <div className={styles.testimonialCard}>
                <p>&quot;SiteCrafix transformed our online presence. Our sales grew 30% after launch!&quot;</p>
                <div className={styles.client}>
                  <Image 
                    src="/images/ayesha.webp" 
                    alt="Ayesha K." 
                    width={60}
                    height={60}
                  />
                  <span>Ayesha K.</span>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p>&quot;Professional, responsive, and creative. Highly recommended.&quot;</p>
                <div className={styles.client}>
                  <Image 
                    src="/images/raj.jpg" 
                    alt="Raj P." 
                    width={60}
                    height={60}
                  />
                  <span>Raj P.</span>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p>&quot;Exceptional work and great support throughout the project.&quot;</p>
                <div className={styles.client}>
                  <Image 
                    src="/images/zubair.webp" 
                    alt="Zubair Hamza" 
                    width={60}
                    height={60}
                  />
                  <span>Zubair Hamza</span>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p>&quot;Creative solutions and timely delivery. Highly satisfied.&quot;</p>
                <div className={styles.client}>
                  <Image 
                    src="/images/rafiq.webp" 
                    alt="Rafiq Ahmad" 
                    width={60}
                    height={60}
                  />
                  <span>Rafiq Ahmad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.whySection} id="why">
          <h2>Why Choose SiteCrafix?</h2>
          <div className={styles.whyScroll}>
            <div className={styles.whyWrapper}>
              <div className={styles.reasonCard}>
                <h3>🚀 Fast Delivery</h3>
                <p>Get your website live in just a few days.</p>
              </div>
              <div className={styles.reasonCard}>
                <h3>💰 Affordable</h3>
                <p>Designed for startups and small businesses.</p>
              </div>
              <div className={styles.reasonCard}>
                <h3>📱 Mobile-First</h3>
                <p>Optimized for all screen sizes and devices.</p>
              </div>
              <div className={styles.reasonCard}>
                <h3>🎯 Custom Work</h3>
                <p>Websites tailored to your brand and goals.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqScroll}>
            <div className={styles.faqWrapper}>
              <div className={styles.faqItem}>
                <h3>How long does it take to build a website?</h3>
                <p>Most websites are delivered within 3–7 days depending on complexity and content readiness.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you provide domain and hosting?</h3>
                <p>Yes! Our Pro packages include 1 year of free domain and hosting.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I update the website myself later?</h3>
                <p>Yes, we use platforms that let you make basic updates without needing a developer.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if I need support after delivery?</h3>
                <p>We offer free support for up to 3 months depending on your package. Paid support plans are also available.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.process} id="process">
          <h2>Our Process</h2>
          <div className={styles.processScroll}>
            <div className={styles.processTrack}>
              <div className={styles.processCard}>
                <h3>1. Discovery</h3>
                <p>We understand your business, target audience, and goals to create a tailored plan.</p>
              </div>
              <div className={styles.processCard}>
                <h3>2. Design</h3>
                <p>We design clean, modern, and mobile-friendly interfaces that reflect your brand identity.</p>
              </div>
              <div className={styles.processCard}>
                <h3>3. Development</h3>
                <p>We develop fast, responsive, and SEO-ready websites using the latest technologies.</p>
              </div>
              <div className={styles.processCard}>
                <h3>4. Launch &amp; Support</h3>
                <p>We launch your website and provide ongoing support and updates as needed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.socials} id="socials">
          <h2>Connect With Us</h2>
          <p className={styles.socialIntro}>
            Follow us on social media for updates, designs, and client stories.
          </p>
          <div className={styles.icons}>
            <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://wa.me/91914962459" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h2>Get in Touch</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactDetails}>
              <h3>Contact Information</h3>
              <p><strong>Address:</strong> Sopore, Baramulla, Jammu &amp; Kashmir, 193201</p>
              <p><strong>Email:</strong> sitecrafix@gmail.com</p>
              <p><strong>Business Hours:</strong> Mon–Sat, 10AM–6PM</p>
            </div>

            <form
              className={styles.contactForm}
              action="https://formspree.io/f/myzwojoa"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="tel" name="phone" placeholder="Your Phone Number" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className={styles.primaryBtn}>Send Message</button>
            </form>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <h3>SiteCrafix</h3>
              <p>Designing impactful, affordable websites for businesses, creators, and startups.</p>
            </div>

            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#top">Home</a></li>
                <li><a href="#services">about</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className={styles.footerContact}>
              <h4>Contact</h4>
              <p>📍 Sopore, Baramulla, J&amp;K</p>
              <p>📧 sitecrafix@email.com</p>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} SiteCrafix. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}