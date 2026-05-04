import React, { useEffect } from 'react';
import '../pages/Batches100Page.css';

const CentennialOffer: React.FC = () => {
  useEffect(() => {
    // Add Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // Run the inline script logic
    const runLogic = () => {
      const RAZORPAY_KEY_ID = "rzp_test_REPLACE_WITH_YOUR_KEY_ID";
      const REGISTRATION_AMOUNT_PAISE = 200000; // Rs. 2,000 = 200000 paise
      const COMPANY_LOGO_URL = "https://indiadroneacademy.com/logo.png";

      // ---------------------------------------------------------
      // Pre-select category from offer cards
      // ---------------------------------------------------------
      document.querySelectorAll('[data-category]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const cat = (e.currentTarget as HTMLElement).dataset.category;
          const radio = document.querySelector(`input[name="category"][value="${cat}"]`) as HTMLInputElement;
          if (radio) radio.checked = true;
        });
      });

      // ---------------------------------------------------------
      // Form submission and Razorpay integration
      // ---------------------------------------------------------
      const form = document.getElementById('registrationForm') as HTMLFormElement;
      const payBtn = document.getElementById('payBtn') as HTMLButtonElement;
      const statusBox = document.getElementById('formStatus');

      if (!form || !payBtn || !statusBox) return;

      function setStatus(type: string, message: string) {
        if (statusBox) {
          statusBox.className = 'form-status' + (type ? ' ' + type : '');
          statusBox.textContent = message || '';
        }
      }

      function setLoading(state: boolean) {
        if (payBtn) {
          if (state) {
            payBtn.classList.add('loading');
            payBtn.disabled = true;
          } else {
            payBtn.classList.remove('loading');
            payBtn.disabled = false;
          }
        }
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        setStatus('', '');

        const fullName = (document.getElementById('fullName') as HTMLInputElement).value.trim();
        const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const city = (document.getElementById('city') as HTMLInputElement).value.trim();
        const ageCheck = (document.getElementById('ageCheck') as HTMLInputElement).checked;
        const termsCheck = (document.getElementById('termsCheck') as HTMLInputElement).checked;
        const categoryElement = document.querySelector('input[name="category"]:checked') as HTMLInputElement;
        const category = categoryElement ? categoryElement.value : 'Small';

        // Validation
        if (!fullName || fullName.length < 3) {
          setStatus('error', 'Please enter your full name as per your government ID.');
          return;
        }
        if (!/^[6-9]\d{9}$/.test(phone)) {
          setStatus('error', 'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.');
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setStatus('error', 'Please enter a valid email address.');
          return;
        }
        if (!city) {
          setStatus('error', 'Please enter your city.');
          return;
        }
        if (!ageCheck || !termsCheck) {
          setStatus('error', 'Please confirm both eligibility and terms checkboxes.');
          return;
        }

        if (typeof (window as any).Razorpay === 'undefined') {
          setStatus('error', 'Payment gateway could not load. Please check your internet connection and refresh the page.');
          return;
        }

        setLoading(true);

        const options = {
          key: RAZORPAY_KEY_ID,
          amount: REGISTRATION_AMOUNT_PAISE,
          currency: "INR",
          name: "India Drone Academy",
          description: `Centennial Batch Registration - ${category} Category`,
          image: COMPANY_LOGO_URL,
          prefill: {
            name: fullName,
            email: email,
            contact: phone
          },
          notes: {
            category: category,
            city: city,
            full_name: fullName,
            batch: "Centennial 100 Batches"
          },
          theme: {
            color: "#E0A82E"
          },
          handler: function (response: any) {
            setLoading(false);
            setStatus('success',
              `Payment received. Reference: ${response.razorpay_payment_id}. ` +
              `Our coordinator will reach out within 10 minutes with your batch start date and joining instructions.`
            );
            form.reset();
            const defaultRadio = document.querySelector('input[name="category"][value="Small"]') as HTMLInputElement;
            if (defaultRadio) defaultRadio.checked = true;
            window.scrollTo({ top: statusBox.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
          },
          modal: {
            ondismiss: function () {
              setLoading(false);
              setStatus('error', 'Payment cancelled. Your seat is not yet confirmed. Please complete the payment to lock your spot.');
            }
          }
        };

        try {
          const rzp = new (window as any).Razorpay(options);
          rzp.on('payment.failed', function (response: any) {
            setLoading(false);
            setStatus('error',
              `Payment failed: ${response.error.description || 'Unknown error'}. ` +
              `Please try again or contact us at +91 7799 100 040.`
            );
          });
          rzp.open();
        } catch (err) {
          setLoading(false);
          setStatus('error', 'Unable to initiate payment. Please refresh the page and try again, or contact us directly.');
          console.error('Razorpay error:', err);
        }
      });

      // ---------------------------------------------------------
      // FAQ accordion
      // ---------------------------------------------------------
      document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');
          document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
          if (!isOpen) item.classList.add('open');
        });
      });

      // ---------------------------------------------------------
      // Scroll reveal animations
      // ---------------------------------------------------------
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('#centennial-section section > .container > *').forEach(el => {
        // el.classList.add('reveal');
        // observer.observe(el);
      });
    };

    setTimeout(runLogic, 100);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="centennial-section" className="batches-100-page" dangerouslySetInnerHTML={{
      __html: `
<!-- HERO -->
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-left">
        <div class="hero-eyebrow">
          <span class="eyebrow">Centennial Batch &middot; 2026</span>
        </div>
        <h1 class="hero-title">
          One hundred batches.<br>
          One academy.<br>
          The movement <em>continues.</em>
        </h1>
        <p class="hero-sub">
          India Drone Academy has crossed a milestone that very few drone training organisations in the country can claim. To mark it, we are opening a limited window for the next intake at a benefit of up to Rs. 15,000.
        </p>
        <div class="hero-cta-row">
          <a href="#offer" class="btn-primary">
            Claim the offer
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#why" class="btn-ghost">Why train with us</a>
        </div>
      </div>
      <div class="hero-right">
        <div class="hundred-mark">
          <div class="orbit-ring"><div class="orbit-dot"></div></div>
          <div class="hundred-number">100</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- MILESTONE STRIP -->
<section class="milestone" style="padding: 60px 0;">
  <div class="container">
    <div class="milestone-grid">
      <div class="milestone-cell">
        <div class="milestone-number">100<sup>+</sup></div>
        <div class="milestone-label">Batches of DGCA-authorised drone pilot training</div>
      </div>
      <div class="milestone-cell">
        <div class="milestone-number">600<sup>+</sup></div>
        <div class="milestone-label">Pilots trained and certified across India</div>
      </div>
      <div class="milestone-cell">
        <div class="milestone-number">250<sup>+</sup></div>
        <div class="milestone-label">Commercial drone operations delivered for government and enterprise</div>
      </div>
      <div class="milestone-cell">
        <div class="milestone-number">9</div>
        <div class="milestone-label">Years of presence in the Indian UAV industry since 2017</div>
      </div>
    </div>
  </div>
</section>

<!-- THE OFFER -->
<section class="offer" id="offer">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">The Centennial Offer</span>
      <h2 class="section-title">Pay <em>two thousand.</em><br>Walk in with a career.</h2>
      <p class="section-lead">
        For a limited number of seats in the next intake, a single payment of Rs. 2,000 confirms your seat and unlocks a celebration discount on the full course fee. Choose the category that matches the work you want to do.
      </p>
    </div>

    <div class="offer-callout">
      <div class="offer-callout-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 6V10L13 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="offer-callout-text">
        <strong>How it works.</strong> Rs. 2,000 is your registration. It locks the seat, locks the celebration price, and is fully adjusted against your course fee on joining. No hidden charges.
      </div>
    </div>

    <div class="offer-cards">
      <!-- SMALL -->
      <div class="offer-card">
        <div class="offer-card-tag">Small Category Pilot</div>
        <h3 class="offer-card-title">Small <em>Drone</em></h3>
        <p class="offer-card-cat">Up to 25 kg take-off weight. The most in-demand category for surveying, agriculture, mapping and inspection work.</p>

        <div class="offer-pricing">
          <div class="offer-pay">Rs. 2,000</div>
          <div class="offer-pay-label">to register</div>
        </div>

        <div class="offer-benefit">
          <div class="offer-benefit-line">Centennial benefit unlocked</div>
          <div class="offer-benefit-amount">Rs. 12,000<span>off the full course fee</span></div>
        </div>

        <ul class="offer-includes">
          <li>5-day DGCA-compliant Small Category programme</li>
          <li>Theory, simulator and live flying sessions</li>
          <li>Training at our Holy Mary Institute campus, Hyderabad</li>
          <li>Career guidance and government tender briefing</li>
          <li>Certification on successful completion</li>
        </ul>

        <a href="#register" data-category="Small" class="offer-card-cta">Reserve a Small Category seat</a>
      </div>

      <!-- MEDIUM -->
      <div class="offer-card featured">
        <div class="offer-card-tag">Medium Category Pilot</div>
        <h3 class="offer-card-title">Medium <em>Drone</em></h3>
        <p class="offer-card-cat">Above 25 kg and up to 150 kg take-off weight. For corridor mapping, mining surveys, large infrastructure inspection and heavier payload work.</p>

        <div class="offer-pricing">
          <div class="offer-pay">Rs. 2,000</div>
          <div class="offer-pay-label">to register</div>
        </div>

        <div class="offer-benefit">
          <div class="offer-benefit-line">Centennial benefit unlocked</div>
          <div class="offer-benefit-amount">Rs. 15,000<span>off the full course fee</span></div>
        </div>

        <ul class="offer-includes">
          <li>Extended DGCA-compliant Medium Category programme</li>
          <li>Theory, simulator and live flying on medium-class drones</li>
          <li>Training at our Holy Mary Institute campus, Hyderabad</li>
          <li>Field exposure to commercial UAV deployments</li>
          <li>Certification on successful completion</li>
        </ul>

        <a href="#register" data-category="Medium" class="offer-card-cta">Reserve a Medium Category seat</a>
      </div>
    </div>

    <p class="fine-print">
      Limited seats. Registration is on a first-come, first-served basis. Course schedule, eligibility and certification follow DGCA guidelines under RPTO Authorization No. 06/2025 (valid February 2025 to February 2030).
    </p>
  </div>
</section>

<!-- WHY IDA -->
<section class="why" id="why">
  <div class="container">
    <div class="why-grid">
      <div>
        <span class="eyebrow">Why train here</span>
        <h2 class="section-title">A track record you can <em>verify.</em></h2>
        <p class="section-lead" style="margin-bottom: 24px;">
          A drone certificate is only as strong as the institution behind it. India Drone Academy is built on field experience from real government and enterprise projects, not classroom theory alone.
        </p>
        <p style="font-size:14px; color:var(--mute); line-height:1.7;">
          When you train with us, you train with the same team that has delivered survey work for state governments, AP Drones Corporation and large infrastructure programmes across the country.
        </p>
      </div>

      <div class="why-cards">
        <div class="why-card">
          <div class="why-card-num">01 / Authorisation</div>
          <h4 class="why-card-title">DGCA-authorised RPTO</h4>
          <p class="why-card-text">Authorization No. 06/2025, valid February 2025 to February 2030. First authorised in 2023.</p>
        </div>
        <div class="why-card">
          <div class="why-card-num">02 / Government Work</div>
          <h4 class="why-card-title">Real project experience</h4>
          <p class="why-card-text">Amaravati Capital City aerial survey, AP Land Resurvey programme in Guntur and Sri Sathya Sai districts, empanelled with AP Drones Corporation.</p>
        </div>
        <div class="why-card">
          <div class="why-card-num">03 / Institutional Reach</div>
          <h4 class="why-card-title">University partnerships</h4>
          <p class="why-card-text">Active collaborations with Acharya Nagarjuna University, Guntur and Sri Venkateswara University, Tirupati.</p>
        </div>
        <div class="why-card">
          <div class="why-card-num">04 / Continuity</div>
          <h4 class="why-card-title">Post-training support</h4>
          <p class="why-card-text">Career guidance, government tender briefings, and access to opportunities through the IPage Group ecosystem.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- REGISTRATION FORM -->
<section class="register-section" id="register">
  <div class="container">
    <div class="register-grid">
      <div class="register-info">
        <span class="eyebrow">Registration</span>
        <h2 class="section-title" style="margin-top:16px; margin-bottom:24px;">Lock your seat in <em>two minutes.</em></h2>
        <p class="section-lead">
          Fill in your details, choose your category, and complete the Rs. 2,000 payment securely through Razorpay. You will receive an instant confirmation on email and WhatsApp.
        </p>

        <div class="register-trust">
          <div class="trust-item">
            <div class="trust-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L3 5V10C3 14 6 17.5 10 18C14 17.5 17 14 17 10V5L10 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="trust-text">
              <strong>Secure payment</strong>
              <span>Powered by Razorpay. UPI, cards, net banking and wallets accepted.</span>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                <path d="M10 6V10L13 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="trust-text">
              <strong>Instant confirmation</strong>
              <span>Seat number and joining instructions sent within 10 minutes.</span>
            </div>
          </div>
          <div class="trust-item">
            <div class="trust-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 10C3 6 6 3 10 3C12.5 3 14.7 4.3 16 6.3M17 10C17 14 14 17 10 17C7.5 17 5.3 15.7 4 13.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 3V6.5H12.5M4 17V13.5H7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="trust-text">
              <strong>Adjusted in fee</strong>
              <span>Rs. 2,000 fully credited to your course fee on joining.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="register-form-wrap">
        <form id="registrationForm" class="register-form" novalidate>
          <div class="form-group">
            <label for="fullName">Full Name <span class="req">*</span></label>
            <input type="text" id="fullName" name="fullName" required placeholder="As per your government ID" autocomplete="name">
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="phone">Mobile Number <span class="req">*</span></label>
              <input type="tel" id="phone" name="phone" required pattern="[6-9][0-9]{9}" maxlength="10" placeholder="10-digit mobile" autocomplete="tel">
            </div>
            <div class="form-group">
              <label for="email">Email <span class="req">*</span></label>
              <input type="email" id="email" name="email" required placeholder="you@example.com" autocomplete="email">
            </div>
          </div>

          <div class="form-group">
            <label for="city">City <span class="req">*</span></label>
            <input type="text" id="city" name="city" required placeholder="Your current city" autocomplete="address-level2">
          </div>

          <div class="form-group">
            <label>Choose Category <span class="req">*</span></label>
            <div class="category-radio">
              <label class="radio-card">
                <input type="radio" name="category" value="Small" checked>
                <div class="radio-card-inner">
                  <strong>Small Category</strong>
                  <span>Up to 25 kg &middot; Rs. 12,000 benefit</span>
                </div>
              </label>
              <label class="radio-card">
                <input type="radio" name="category" value="Medium">
                <div class="radio-card-inner">
                  <strong>Medium Category</strong>
                  <span>25 to 150 kg &middot; Rs. 15,000 benefit</span>
                </div>
              </label>
            </div>
          </div>

          <div class="form-group form-checks">
            <label class="check-line">
              <input type="checkbox" id="ageCheck" required>
              <span>I confirm I am 18 years or older and meet DGCA eligibility for drone pilot training.</span>
            </label>
            <label class="check-line">
              <input type="checkbox" id="termsCheck" required>
              <span>I have read and agree to the registration terms, refund policy, and DGCA training conditions.</span>
            </label>
          </div>

          <div class="form-summary">
            <div class="summary-line">
              <span>Registration amount</span>
              <strong>Rs. 2,000</strong>
            </div>
            <div class="summary-note">Adjusted against course fee on joining. Centennial discount of Rs. 12,000 (Small) / Rs. 15,000 (Medium) applied to your final balance.</div>
          </div>

          <button type="submit" id="payBtn" class="form-submit">
            <span class="btn-text">Pay Rs. 2,000 securely</span>
            <span class="btn-loader"></span>
          </button>

          <div class="form-status" id="formStatus"></div>

          <div class="payment-logos">
            Razorpay &middot; UPI &middot; Cards &middot; Net Banking &middot; Wallets
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- SCHEDULE -->
<section>
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Weekly schedule</span>
      <h2 class="section-title">Five days. <em>One pilot.</em></h2>
      <p class="section-lead">
        Every batch starts on Monday. The structure is consistent, the timings are fixed, and every student moves through theory, simulator and live flying in the same week.
      </p>
    </div>

    <div class="schedule-table">
      <div class="schedule-row head">
        <div>Day</div>
        <div>Module</div>
        <div>Timing</div>
        <div>Location</div>
      </div>
      <div class="schedule-row">
        <div class="schedule-day">Mon &mdash; Tue</div>
        <div class="schedule-module">Theory and ground school</div>
        <div class="schedule-time">9:00 AM &mdash; 5:00 PM</div>
        <div class="schedule-loc">Hyderabad / Online</div>
      </div>
      <div class="schedule-row">
        <div class="schedule-day">Wednesday</div>
        <div class="schedule-module">Drone simulator sessions</div>
        <div class="schedule-time">9:00 AM &mdash; 5:00 PM</div>
        <div class="schedule-loc">Keesara, Hyderabad</div>
      </div>
      <div class="schedule-row">
        <div class="schedule-day">Thu &mdash; Fri</div>
        <div class="schedule-module">Live flying sessions</div>
        <div class="schedule-time">9:00 AM &mdash; 5:00 PM</div>
        <div class="schedule-loc">Keesara, Hyderabad</div>
      </div>
    </div>

    <p style="margin-top:24px; font-size:13px; color:var(--mute); text-align:center;">
      Batch size 10 to 15 students. Drone simulator access is provided as determined by IDA based on programme structure and availability.
    </p>
  </div>
</section>

<!-- HOW TO REGISTER -->
<section style="padding-top:0;" id="process">
  <div class="container">
    <div class="section-header centered">
      <span class="eyebrow">How it works</span>
      <h2 class="section-title">Four steps. <em>That is it.</em></h2>
    </div>
  </div>

  <div class="steps">
    <div class="step">
      <div class="step-num">01</div>
      <h4 class="step-title">Reach out</h4>
      <p class="step-text">Call, WhatsApp or email us. We will share the application form and the next batch date.</p>
    </div>
    <div class="step">
      <div class="step-num">02</div>
      <h4 class="step-title">Pay Rs. 2,000</h4>
      <p class="step-text">A single confirmation payment that locks your seat and the centennial discount.</p>
    </div>
    <div class="step">
      <div class="step-num">03</div>
      <h4 class="step-title">Submit documents</h4>
      <p class="step-text">Photo ID, address proof, educational qualification and a passport size photograph.</p>
    </div>
    <div class="step">
      <div class="step-num">04</div>
      <h4 class="step-title">Begin training</h4>
      <p class="step-text">Show up Monday morning, 9 AM. Five days later you walk out as a certified pilot.</p>
    </div>
  </div>
</section>

<!-- FAQ -->
<section>
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Frequently asked</span>
      <h2 class="section-title">Before you <em>register.</em></h2>
    </div>

    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q">
          <div class="faq-q-text">Is the Rs. 2,000 a separate fee or does it count towards my course fee?</div>
          <div class="faq-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div class="faq-a">It counts towards your course fee. Rs. 2,000 is your registration. It is fully adjusted against the balance fee on the day you join the batch. The Rs. 12,000 or Rs. 15,000 benefit applies on the full course price.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <div class="faq-q-text">Do I need any prior flying experience or technical background?</div>
          <div class="faq-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div class="faq-a">No. Our programme is structured for first-time pilots. Eligibility requirements are class 10 pass, age 18 and above, and a medical fitness certificate as per DGCA guidelines. Everything else is taught from the ground up.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <div class="faq-q-text">Where exactly is the training conducted?</div>
          <div class="faq-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div class="faq-a">Theory sessions are conducted in Hyderabad with an online option. Simulator and live flying sessions are at our training campus at Holy Mary Institute of Technology and Science, Keesara - Bogaram - Ghatkesar Road, Kondapur, Telangana 501303.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <div class="faq-q-text">Which is better for me, Small or Medium category?</div>
          <div class="faq-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div class="faq-a">Small category covers most of the day-to-day commercial drone work in India today, including agriculture, mapping, surveying, photography and basic inspection. Medium category is suited for those targeting heavier payload work, mining surveys, corridor mapping and large infrastructure projects. If you are unsure, our team can guide you based on your career goals.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <div class="faq-q-text">What kind of work can I do after certification?</div>
          <div class="faq-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div class="faq-a">Certified drone pilots find opportunities in aerial mapping, agriculture spraying, infrastructure inspection, real estate, government survey projects, defence support and self-employment as independent operators. We share career guidance during and after training, but actual placements depend on individual effort, skill development and market conditions.</div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          <div class="faq-q-text">When does the next batch start?</div>
          <div class="faq-toggle">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1V13M1 7H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
        </div>
        <div class="faq-a">Every batch begins on a Monday. Once you complete registration, our coordinator will share the exact start date for the next available batch and your joining instructions.</div>
      </div>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section class="final-cta">
  <div class="container">
    <div class="final-cta-inner">
      <span class="eyebrow">Centennial intake &middot; closing soon</span>
      <h2 style="margin-top:16px;">The 101st batch <em>is yours.</em></h2>
      <p class="final-cta-sub">
        100 batches built this academy. The next one is being built around the pilots joining today. Lock your seat for Rs. 2,000.
      </p>
      <div class="final-cta-actions">
        <a href="#register" class="btn-primary">
          Register now
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="tel:+917799100040" class="btn-ghost">Or call +91 7799 100 040</a>
      </div>
      <div class="seats-warning">Limited seats &middot; First-come, first-served</div>
    </div>
  </div>
</section>
      `
    }} />
  );
};

export default CentennialOffer;
