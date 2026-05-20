/* === Mock answer data for [System] === */
const Icon = window.Icon;

const BACK_PAIN = {
  query: "What causes lower back pain?",
  chatLabel: "Lower back pain",
  tabs: [
    { id: 'pages', label: 'Pages', icon: 'FileText', count: 6 },
    { id: 'doctors', label: 'Doctors', icon: 'Stethoscope', count: 6 },
    { id: 'services', label: 'Services', icon: 'Video', count: 5 },
    { id: 'locations', label: 'Locations', icon: 'MapPin', count: 2 },
  ],
  summary: [
    { text: "Lower back pain affects roughly " },
    { text: "8 in 10 adults", cite: [1] },
    { text: " at some point in their lives and is most often caused by mechanical issues — muscle or ligament strain, age-related changes to spinal discs, or arthritis." },
    { text: " The vast majority of cases are not serious and improve within 4–6 weeks with rest, gentle movement, and over-the-counter pain relief", cite: [2, 3] },
    { text: ". Persistent pain, pain that radiates down a leg, or symptoms following an injury warrant evaluation by a clinician." },
  ],
  sections: [
    {
      id: 'overview',
      tab: 'pages',
      title: 'Overview',
      icon: 'Info',
      body: () => (
        <>
          <p>The lower back, or <em>lumbar spine</em>, supports most of the body's weight and is involved in nearly every movement — bending, twisting, walking, lifting. That mechanical workload makes it the most commonly injured region of the back.<sup><a href="#src-1" className="cite">1</a></sup></p>
          <p>Most lower back pain is <strong>non-specific</strong>, meaning no single structural cause is identified on imaging. It's typically the result of overuse, poor posture, or temporary muscular strain rather than a serious underlying condition.<sup><a href="#src-2" className="cite">2</a></sup></p>
          <div className="callout">
            <div className="callout__icon">{Icon.Sparkle()}</div>
            <div>
              <p className="callout__title">In a nutshell</p>
              <p className="callout__body">Most lower back pain resolves on its own within 6 weeks. Rest briefly, keep moving gently, and use heat or OTC anti-inflammatories. See a clinician if pain persists or worsens.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'causes',
      tab: 'pages',
      title: 'Common Causes',
      icon: 'Bone',
      body: () => (
        <>
          <p>Causes of lower back pain typically fall into a few mechanical categories. The list below covers the most common, in roughly the order clinicians consider them.<sup><a href="#src-1" className="cite">1</a></sup><sup><a href="#src-4" className="cite">4</a></sup></p>
          <ul className="bullet-list">
            <li>
              <div className="bullet-list__label">Muscle or ligament strain</div>
              <div className="bullet-list__desc">Heavy lifting or a sudden awkward movement can strain back muscles and spinal ligaments — the most common cause.</div>
            </li>
            <li>
              <div className="bullet-list__label">Bulging or ruptured disc</div>
              <div className="bullet-list__desc">Discs cushion the vertebrae. A bulge or rupture can press on a nerve, often causing pain that radiates into the buttock or leg (sciatica).</div>
            </li>
            <li>
              <div className="bullet-list__label">Arthritis</div>
              <div className="bullet-list__desc">Osteoarthritis can affect the lower back. In some cases it leads to spinal stenosis — narrowing of the space around the spinal cord.</div>
            </li>
            <li>
              <div className="bullet-list__label">Skeletal irregularities</div>
              <div className="bullet-list__desc">Scoliosis and other curvature conditions can contribute to pain, usually appearing in middle age.</div>
            </li>
            <li>
              <div className="bullet-list__label">Osteoporosis</div>
              <div className="bullet-list__desc">Brittle, porous bones can lead to compression fractures of the spine's vertebrae.</div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'see-doctor',
      tab: 'pages',
      title: 'When to See a Doctor',
      icon: 'Alert',
      body: () => (
        <>
          <p>Most lower back pain can be managed at home, but the following warrant prompt medical attention.<sup><a href="#src-3" className="cite">3</a></sup></p>
          <ul className="bullet-list">
            <li>
              <div className="bullet-list__label">Pain lasting &gt; 6 weeks</div>
              <div className="bullet-list__desc">Pain that doesn't improve, or that wakes you at night.</div>
            </li>
            <li>
              <div className="bullet-list__label">Severe or worsening pain</div>
              <div className="bullet-list__desc">Pain that isn't improving with rest, ice, or OTC medication.</div>
            </li>
            <li>
              <div className="bullet-list__label">Pain radiating below the knee</div>
              <div className="bullet-list__desc">Especially if accompanied by numbness, tingling, or weakness in the leg.</div>
            </li>
            <li>
              <div className="bullet-list__label">Recent fall or injury</div>
              <div className="bullet-list__desc">Particularly in older adults or anyone with osteoporosis.</div>
            </li>
          </ul>
          <div className="callout callout--danger">
            <div className="callout__icon">{Icon.Alert()}</div>
            <div>
              <p className="callout__title">Seek emergency care if</p>
              <p className="callout__body">You experience new bowel or bladder incontinence, severe numbness around the groin, or sudden severe leg weakness — these can indicate <em>cauda equina syndrome</em>, a surgical emergency.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'treatments',
      tab: 'services',
      title: 'Treatments',
      icon: 'Pill',
      body: () => (
        <>
          <p>Treatment follows a stepwise approach: try the simplest, lowest-risk options first, and escalate only if symptoms persist.<sup><a href="#src-2" className="cite">2</a></sup><sup><a href="#src-5" className="cite">5</a></sup></p>
          <ol className="bullet-list">
            <li>
              <div className="bullet-list__label">Self-care (1–2 weeks)</div>
              <div className="bullet-list__desc">Heat or ice, OTC NSAIDs like ibuprofen, gentle stretching, and continued light activity. Bed rest beyond 1–2 days can actually slow recovery.</div>
            </li>
            <li>
              <div className="bullet-list__label">Physical therapy</div>
              <div className="bullet-list__desc">A PT can teach posture, strengthening, and flexibility exercises specific to your back. Often the most effective intervention for chronic pain.</div>
            </li>
            <li>
              <div className="bullet-list__label">Prescription medication</div>
              <div className="bullet-list__desc">If OTC options are insufficient, a clinician may prescribe muscle relaxants or short courses of stronger pain medication.</div>
            </li>
            <li>
              <div className="bullet-list__label">Injections</div>
              <div className="bullet-list__desc">Epidural steroid injections can reduce inflammation around irritated nerves and provide weeks to months of relief.</div>
            </li>
            <li>
              <div className="bullet-list__label">Surgery</div>
              <div className="bullet-list__desc">Reserved for cases with structural problems unresponsive to conservative care, or for neurologic symptoms. Less than 5% of cases.</div>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 'specialties',
      tab: 'doctors',
      title: 'Related Specialties',
      icon: 'Stethoscope',
      body: () => (
        <>
          <p>Depending on duration and severity, lower back pain may be managed by several specialties. Most patients start with primary care.</p>
          <CarouselSpecialties />
        </>
      ),
    },
    {
      id: 'find-care',
      tab: 'locations',
      title: 'Find Care at [System]',
      icon: 'MapPin',
      body: () => (
        <>
          <p>Same-day and next-day appointments at three locations near you.</p>
          <CarouselLocations />
        </>
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'S', name: '[System] Spine Center', title: 'Back pain — patient overview', date: 'Apr 2026', url: '#' },
    { num: 2, fav: 'S', name: '[System] Rheumatology', title: 'Back pain basics — patient guide', date: 'Sep 2025', url: '#' },
    { num: 3, fav: 'S', name: '[System] Pain Management', title: 'Living with chronic low back pain', date: 'Jan 2026', url: '#' },
    { num: 4, fav: 'S', name: '[System] Clinical Library', title: 'Lumbar strain — diagnosis & care pathway', date: 'Mar 2026', url: '#' },
    { num: 5, fav: 'S', name: '[System] Physical Therapy', title: 'Non-medication approaches to back pain', date: 'Aug 2025', url: '#' },
    { num: 6, fav: 'S', name: '[System] Family Medicine', title: 'Treatment of acute low back pain', date: 'Nov 2025', url: '#' },
  ],
  followups: [
    "What stretches help lower back pain?",
    "When should I get an MRI for back pain?",
    "Find a physical therapist near me",
    "Is back pain a sign of something serious?",
    "Does [System] accept my insurance for PT?",
  ],
};

/* === Specialties carousel === */
function CarouselSpecialties() {
  const items = [
    { name: 'Dr. Maya Okonjo', role: 'Primary Care', rating: 4.9, count: 412, avail: 'Tomorrow, 9:40 AM', dist: '0.8 mi · Midtown' },
    { name: 'Andre Thibault, DPT', role: 'Physical Therapy', rating: 4.8, count: 287, avail: 'Today, 4:15 PM', dist: '1.2 mi · West Side' },
    { name: 'Dr. Priya Ramanathan', role: 'Orthopedic Spine', rating: 4.9, count: 198, avail: 'Thu, May 21', dist: '2.0 mi · Hudson Center' },
    { name: 'Dr. James Whitfield', role: 'Pain Management', rating: 4.7, count: 156, avail: 'Fri, May 22', dist: '1.6 mi · East Village' },
    { name: 'Dr. Lena Park', role: 'Sports Medicine', rating: 4.8, count: 224, avail: 'Mon, May 18', dist: '0.5 mi · Midtown' },
  ];
  return (
    <div className="carousel">
      {items.map((p, i) => (
        <div className="provider-card" key={i}>
          <div className="provider-card__head">
            <div className="provider-photo">{Icon.Person()}</div>
            <div>
              <p className="provider-card__name">{p.name}</p>
              <p className="provider-card__role">{p.role}</p>
              <div className="rating" style={{marginTop: 4}}>
                <span className="rating__stars">{Icon.Star()}</span>
                <span className="rating__num">{p.rating}</span>
                <span className="rating__count">({p.count})</span>
              </div>
            </div>
          </div>
          <div className="provider-card__meta">
            <div className="meta-row">{Icon.Calendar()}<span>Next: <strong>{p.avail}</strong></span></div>
            <div className="meta-row">{Icon.MapPin()}<span>{p.dist}</span></div>
            <div className="meta-row">{Icon.Shield()}<span>Accepts most insurance</span></div>
          </div>
          <div className="provider-card__actions">
            <button className="btn btn--primary">Book</button>
            <button className="btn">Profile</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function CarouselLocations() {
  const items = [
    { name: '[System] Midtown', role: 'Primary & urgent care', rating: 4.7, count: 1240, avail: 'Open until 9 PM', dist: '0.8 mi · 245 W 38th St' },
    { name: '[System] West Side', role: 'PT & rehab center', rating: 4.8, count: 612, avail: 'Open until 7 PM', dist: '1.2 mi · 410 W 57th St' },
    { name: '[System] Hudson Spine', role: 'Spine & orthopedics', rating: 4.9, count: 380, avail: 'By appointment', dist: '2.0 mi · 60 Hudson St' },
  ];
  return (
    <div className="carousel">
      {items.map((p, i) => (
        <div className="provider-card" key={i}>
          <div className="provider-card__head">
            <div className="provider-photo" style={{borderRadius: 10}}>{Icon.MapPin()}</div>
            <div>
              <p className="provider-card__name">{p.name}</p>
              <p className="provider-card__role">{p.role}</p>
              <div className="rating" style={{marginTop: 4}}>
                <span className="rating__stars">{Icon.Star()}</span>
                <span className="rating__num">{p.rating}</span>
                <span className="rating__count">({p.count})</span>
              </div>
            </div>
          </div>
          <div className="provider-card__meta">
            <div className="meta-row">{Icon.Clock()}<span><strong>{p.avail}</strong></span></div>
            <div className="meta-row">{Icon.MapPin()}<span>{p.dist}</span></div>
            <div className="meta-row">{Icon.Phone()}<span>(212) 555-0149</span></div>
          </div>
          <div className="provider-card__actions">
            <button className="btn btn--primary">Book visit</button>
            <button className="btn">Directions</button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* === Follow-up: stretches === */
const STRETCHES = {
  query: "What stretches help lower back pain?",
  chatLabel: "Stretches for back pain",
  tabs: [
    { id: 'pages', label: 'Pages', icon: 'FileText', count: 4 },
    { id: 'services', label: 'Services', icon: 'Video', count: 4 },
  ],
  summary: [
    { text: "Five gentle stretches — done daily — are well-supported for relieving non-specific lower back pain." },
    { text: " Hold each for 20–30 seconds, breathe normally, and stop if you feel sharp pain", cite: [4] },
    { text: ". Start slowly and build to 2 sets per day. Most people notice improvement within 2–3 weeks." },
  ],
  sections: [
    {
      id: 'stretches-list',
      tab: 'pages',
      title: 'Five effective stretches',
      icon: 'Sparkle',
      body: () => (
        <>
          <ul className="bullet-list">
            <li>
              <div className="bullet-list__label">Knee-to-chest</div>
              <div className="bullet-list__desc">Lie on your back, pull one knee toward your chest. Hold 20–30s. Switch legs. 2–3 reps per side.</div>
            </li>
            <li>
              <div className="bullet-list__label">Cat–cow</div>
              <div className="bullet-list__desc">On hands and knees, alternate arching and rounding your back slowly. 10 cycles.</div>
            </li>
            <li>
              <div className="bullet-list__label">Pelvic tilt</div>
              <div className="bullet-list__desc">Lying with knees bent, gently flatten your lower back against the floor. Hold 5s. 10 reps.</div>
            </li>
            <li>
              <div className="bullet-list__label">Child's pose</div>
              <div className="bullet-list__desc">Sit back on heels, arms forward, forehead toward the floor. Hold 30s. Repeat 2–3 times.</div>
            </li>
            <li>
              <div className="bullet-list__label">Piriformis stretch</div>
              <div className="bullet-list__desc">On your back, cross one ankle over the opposite knee, pull thigh toward chest. Hold 20–30s per side.</div>
            </li>
          </ul>
          <div className="callout">
            <div className="callout__icon">{Icon.Info()}</div>
            <div>
              <p className="callout__title">A physical therapist will tailor this to you</p>
              <p className="callout__body">If pain is new, severe, or has lasted more than a few weeks, a PT can rule out red flags and build a program around your specific cause of pain.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'safety',
      tab: 'pages',
      title: 'Safety notes',
      icon: 'Alert',
      body: () => (
        <>
          <ul className="bullet-list">
            <li>
              <div className="bullet-list__label">Stop on sharp pain</div>
              <div className="bullet-list__desc">A gentle stretch feels like tension, not pain. Sharp or shooting pain — particularly down a leg — means stop and consult a clinician.<sup><a href="#src-3" className="cite">3</a></sup></div>
            </li>
            <li>
              <div className="bullet-list__label">Avoid bouncing</div>
              <div className="bullet-list__desc">Static, sustained stretches are safer than ballistic (bouncing) ones for an irritated back.</div>
            </li>
            <li>
              <div className="bullet-list__label">Warm up first</div>
              <div className="bullet-list__desc">A 5-minute walk before stretching makes muscles more pliable and reduces risk of strain.</div>
            </li>
          </ul>
        </>
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'S', name: '[System] Physical Therapy', title: 'Back exercises in 15 minutes a day', date: 'Feb 2026', url: '#' },
    { num: 2, fav: 'S', name: '[System] Clinical Library', title: 'Home program: gentle stretches for the lumbar spine', date: 'Apr 2026', url: '#' },
    { num: 3, fav: 'S', name: '[System] Orthopedics', title: 'Low back pain exercise guide', date: 'Jul 2025', url: '#' },
    { num: 4, fav: 'S', name: '[System] Integrative Health', title: 'Yoga, tai chi, and back pain — what we know', date: 'Oct 2025', url: '#' },
  ],
  followups: [
    "What strengthening exercises help long-term?",
    "Is yoga safe for a herniated disc?",
    "How long until stretches show results?",
    "Find a physical therapist near me",
  ],
};

/* ============================================================ */
/* === PRIMARY_CARE: provider-first search ==================== */
/* ============================================================ */
const PRIMARY_CARE = {
  query: "Find a primary care doctor near me",
  chatLabel: "Primary care doctors",
  tabs: [
    { id: 'doctors', label: 'Doctors', icon: 'Stethoscope', count: 12, confidence: 'high' },
    { id: 'locations', label: 'Locations', icon: 'MapPin', count: 4, confidence: 'high' },
    { id: 'appointments', label: 'Appointments', icon: 'Calendar', count: 8, confidence: 'high' },
    { id: 'pages', label: 'Pages', icon: 'FileText', count: 3, confidence: 'high' },
  ],
  summary: [
    { text: "Found " },
    { text: "12 primary care doctors", cite: [1] },
    { text: " accepting new patients within 2 miles of 10001. Showing those with availability in the next two weeks, sorted by patient rating." },
    { text: " All accept your insurance ([Plan] PPO)", cite: [2] },
    { text: "." },
  ],
  sections: [
    {
      id: 'top-matches',
      tab: 'doctors',
      title: 'Top matches',
      body: () => (
        <window.ProviderHero providers={[
          {
            name: 'Dr. Maya Okonjo, MD',
            role: 'Family Medicine',
            years: '12 years',
            rating: 4.9, count: 412,
            dist: '0.8 mi · Midtown',
            langs: 'English, French',
            slots: ['Tomorrow 9:40 AM', 'Thu 11:20 AM', 'Fri 2:00 PM'],
            acceptingNew: true,
          },
          {
            name: 'Dr. Samuel Reyes, MD',
            role: 'Internal Medicine',
            years: '8 years',
            rating: 4.8, count: 287,
            dist: '0.5 mi · Midtown',
            langs: 'English, Spanish',
            slots: ['Today 4:30 PM', 'Tomorrow 8:15 AM'],
            acceptingNew: true,
          },
          {
            name: 'Dr. Lin Chen, MD',
            role: 'Family Medicine',
            years: '15 years',
            rating: 4.8, count: 521,
            dist: '1.4 mi · West Side',
            langs: 'English, Mandarin',
            slots: ['Mon 10:00 AM', 'Tue 1:45 PM'],
            acceptingNew: true,
          },
        ]} />
      ),
    },
    {
      id: 'compare',
      tab: 'doctors',
      title: 'Compare',
      body: () => (
        <window.CompareTable
          headers={['Doctor', 'Distance', 'Next available', 'Languages', 'New patients']}
          rows={[
            [{type: 'name', name: 'Dr. Maya Okonjo', sub: 'Family Medicine · 4.9★'}, '0.8 mi', 'Tomorrow', 'En, Fr', {type: 'tag', label: 'Accepting'}],
            [{type: 'name', name: 'Dr. Samuel Reyes', sub: 'Internal · 4.8★'}, '0.5 mi', 'Today', 'En, Es', {type: 'tag', label: 'Accepting'}],
            [{type: 'name', name: 'Dr. Lin Chen', sub: 'Family · 4.8★'}, '1.4 mi', 'Monday', 'En, Zh', {type: 'tag', label: 'Accepting'}],
            [{type: 'name', name: 'Dr. Aaron Patel', sub: 'Internal · 4.6★'}, '0.7 mi', '~2 weeks', 'En, Hi', {type: 'tag', label: 'Waitlist', neutral: true}],
            [{type: 'name', name: 'Dr. Yara Hadid', sub: 'Family · 4.9★'}, '1.8 mi', '~3 weeks', 'En, Ar', {type: 'tag', label: 'Waitlist', neutral: true}],
          ]}
        />
      ),
    },
    {
      id: 'appts',
      tab: 'appointments',
      title: 'Soonest available',
      body: () => (
        <window.AppointmentSlots
          slots={[
            { time: '4:30 PM', when: 'Today',     loc: 'Dr. Samuel Reyes \u00b7 Internal Medicine', dist: '0.5 mi \u00b7 Midtown',    wait: 'In-person', closes: '15-min appt' },
            { time: '9:40 AM', when: 'Tomorrow',  loc: 'Dr. Maya Okonjo \u00b7 Family Medicine',    dist: '0.8 mi \u00b7 Midtown',    wait: 'In-person', closes: '30-min appt' },
            { time: '11:20 AM',when: 'Thursday',  loc: 'Dr. Maya Okonjo \u00b7 Family Medicine',    dist: '0.8 mi \u00b7 Midtown',    wait: 'Telehealth available', closes: '30-min appt' },
            { time: '1:45 PM', when: 'Tuesday',   loc: 'Dr. Lin Chen \u00b7 Family Medicine',       dist: '1.4 mi \u00b7 West Side',  wait: 'In-person', closes: '30-min appt' },
          ]}
        />
      ),
    },
    {
      id: 'choose',
      tab: 'pages',
      title: 'How to choose',
      body: () => (
        <>
          <p>A few things people often consider when picking a primary care doctor:<sup><a href="#src-3" className="cite">3</a></sup></p>
          <ul className="bullet-list">
            <li>
              <div className="bullet-list__label">Location & hours</div>
              <div className="bullet-list__desc">Pick a doctor close to home or work — convenience is the #1 predictor of whether people actually attend annual checkups.</div>
            </li>
            <li>
              <div className="bullet-list__label">Communication style</div>
              <div className="bullet-list__desc">Some people prefer a doctor who explains in detail; others want quick, direct answers. Read recent reviews to get a sense.</div>
            </li>
            <li>
              <div className="bullet-list__label">In-network status</div>
              <div className="bullet-list__desc">All 5 above are in-network with your plan. Verify at booking — out-of-network can mean $200+ per visit.</div>
            </li>
          </ul>
        </>
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'S', name: '[System] Provider Directory', title: 'Primary care providers — Midtown Manhattan', date: 'Updated May 2026', url: '#' },
    { num: 2, fav: 'P', name: '[Plan]', title: 'Network provider lookup — PPO plan', date: 'May 2026', url: '#' },
    { num: 3, fav: 'S', name: '[System] Patient Resources', title: 'How to choose a primary care doctor', date: 'Mar 2026', url: '#' },
  ],
  followups: [
    "Show female doctors only",
    "Doctors with same-day appointments",
    "Filter by accepting new pediatric patients",
    "Compare top 3 in detail",
  ],
};

/* ============================================================ */
/* === URGENT_CARE: location + wait-time first ================ */
/* ============================================================ */
const URGENT_CARE = {
  query: "Urgent care open right now",
  chatLabel: "Urgent care locations",
  tabs: [
    { id: 'locations', label: 'Locations', icon: 'MapPin', count: 3, confidence: 'high' },
    {
      id: 'reserve', label: 'Available times', icon: 'Calendar', count: 4, confidence: 'high',
    },
    { id: 'guidance', label: 'Guidance', icon: 'BookOpen', count: 2, confidence: 'high' },
    { id: 'pages', label: 'Pages', icon: 'FileText', count: 5, confidence: 'high' },
  ],
  summary: [
    { text: "3 [System] urgent care locations are " },
    { text: "open right now", cite: [1] },
    { text: ". The nearest has a 12-minute estimated wait. You can " },
    { text: "reserve a spot online or walk in", cite: [2] },
    { text: " — both options are first-come, first-served by appointment time." },
  ],
  sections: [
    {
      id: 'open-now',
      tab: 'locations',
      title: 'Open now near you',
      body: () => (
        <window.UrgentCareList items={[
          {
            name: '[System] Midtown Urgent Care',
            wait: 12,
            dist: '0.8 mi',
            address: '245 W 38th St',
            closes: '9:00 PM',
            phone: '(212) 555-0149',
            hourly: [20, 18, 22, 28, 35, 45, 30, 12, 14, 22, 32, 28, 18],
            nowIdx: 7,
          },
          {
            name: '[System] West Side Urgent Care',
            wait: 28,
            dist: '1.2 mi',
            address: '410 W 57th St',
            closes: '8:00 PM',
            phone: '(212) 555-0172',
            hourly: [15, 20, 28, 38, 42, 38, 35, 28, 24, 30, 26, 18, 12],
            nowIdx: 7,
          },
          {
            name: '[System] Hudson Urgent Care',
            wait: 45,
            dist: '2.0 mi',
            address: '60 Hudson St',
            closes: '10:00 PM',
            phone: '(212) 555-0184',
            hourly: [18, 25, 32, 40, 48, 50, 48, 45, 42, 38, 35, 28, 22],
            nowIdx: 7,
          },
        ]} />
      ),
    },
    {
      id: 'pages-results',
      tab: 'pages',
      title: 'On [System].org',
      body: () => (
        <window.PageResults items={[
          {
            kind: 'Service line',
            url: '/services/urgent-care',
            title: 'Urgent Care',
            snippet: 'Same-day evaluation and treatment for non-life-threatening illness and injury — fevers, sprains, UTIs, minor lacerations, and more. No appointment required, but reserving a spot online cuts wait time.',
            meta: ['Updated May 2026', 'Patient services'],
          },
          {
            kind: 'Find care',
            url: '/locations/urgent-care',
            title: 'Urgent Care Locations',
            snippet: 'Browse all 12 [System] urgent care locations across the metro area. Filter by open-now status, pediatric availability, X-ray on-site, and language support.',
            meta: ['Directory', '12 locations'],
          },
          {
            kind: 'Service line',
            url: '/services/emergency',
            title: 'Emergency Care',
            snippet: 'Life-threatening symptoms — chest pain, stroke signs, severe bleeding, difficulty breathing, severe abdominal pain — require an emergency department, not urgent care.',
            meta: ['24/7 service', 'Patient services'],
          },
          {
            kind: 'Patient education',
            url: '/learn/urgent-vs-er',
            title: 'Urgent Care vs. Emergency Room',
            snippet: 'A side-by-side comparison of when to use urgent care versus the ER, including typical cost, wait time, and the kinds of conditions treated at each.',
            meta: ['Clinician-reviewed', '4 min read'],
          },
          {
            kind: 'Billing',
            url: '/billing/urgent-care',
            title: 'Insurance and Billing for Urgent Care',
            snippet: 'How [System] bills urgent care visits, what your copay or coinsurance is likely to be on common plans, and what to do if you receive a balance bill.',
            meta: ['Updated Jan 2026', 'Plans accepted'],
          },
        ]} />
      ),
    },
    {
      id: 'reserve-slots',
      tab: 'reserve',
      title: 'Available times',
      body: (ctx) => (
        <window.AppointmentSlots
          gated={!ctx.loggedIn}
          slots={[
            { time: '3:45 PM', when: 'Today',     loc: '[System] Midtown Urgent Care',    dist: '0.8 mi', wait: '~12 min wait', closes: 'closes 9 PM' },
            { time: '4:15 PM', when: 'Today',     loc: '[System] Midtown Urgent Care',    dist: '0.8 mi', wait: '~12 min wait', closes: 'closes 9 PM' },
            { time: '5:00 PM', when: 'Today',     loc: '[System] West Side Urgent Care',  dist: '1.2 mi', wait: '~28 min wait', closes: 'closes 8 PM' },
            { time: '6:30 PM', when: 'Today',     loc: '[System] Hudson Urgent Care',     dist: '2.0 mi', wait: '~45 min wait', closes: 'closes 10 PM' },
          ]}
        />
      ),
    },
    {
      id: 'what-to-bring',
      tab: 'guidance',
      title: 'What to bring',
      body: () => (
        <ul className="bullet-list">
          <li>
            <div className="bullet-list__label">Photo ID and insurance card</div>
            <div className="bullet-list__desc">Front desk will copy both. If you have a digital insurance card in your wallet app, it's accepted.</div>
          </li>
          <li>
            <div className="bullet-list__label">List of current medications</div>
            <div className="bullet-list__desc">Names and dosages — including over-the-counter and supplements. A screenshot of your pharmacy app works.</div>
          </li>
          <li>
            <div className="bullet-list__label">Form of payment for copay</div>
            <div className="bullet-list__desc">Your plan's urgent care copay is <strong>$45</strong>. Most locations accept tap-to-pay, card, or HSA/FSA.</div>
          </li>
        </ul>
      ),
    },
    {
      id: 'why-urgent',
      tab: 'guidance',
      title: 'Urgent care vs. ER',
      body: () => (
        <>
          <p>Urgent care handles things that need same-day attention but aren't life-threatening. Average visit is ~45 minutes; cost is typically 1/3 of an ER visit.<sup><a href="#src-3" className="cite">3</a></sup></p>
          <div className="callout">
            <div className="callout__icon">{Icon.Info()}</div>
            <div>
              <p className="callout__title">Good for urgent care</p>
              <p className="callout__body">Minor cuts, sprains, fevers, UTIs, ear infections, mild asthma flare-ups, rashes, dehydration.</p>
            </div>
          </div>
          <div className="callout callout--danger">
            <div className="callout__icon">{Icon.Alert()}</div>
            <div>
              <p className="callout__title">Go to ER (or call 911) for</p>
              <p className="callout__body">Chest pain, difficulty breathing, signs of stroke, severe bleeding, suspected broken bones, head injury with confusion, severe abdominal pain.</p>
            </div>
          </div>
        </>
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'S', name: '[System] Locations', title: 'Real-time urgent care hours & wait times', date: 'Live', url: '#' },
    { num: 2, fav: 'S', name: '[System] Patient Portal', title: 'Reserve a spot online', date: 'May 2026', url: '#' },
    { num: 3, fav: 'S', name: '[System] Urgent Care', title: 'When to use urgent care vs emergency department', date: 'Feb 2026', url: '#' },
  ],
  followups: [
    "Reserve the next available slot",
    "What does an urgent care visit cost on my plan?",
    "Is this open 24 hours?",
    "Find a pediatric urgent care",
  ],
};

/* ============================================================ */
/* === COLONOSCOPY: prep timeline ============================= */
/* ============================================================ */

function ColonoscopyInstructions() {
  return (
    <div className="instr-cards">
      <div className="instr-card">
        <div className="instr-card__title">Foods to avoid</div>
        <div className="instr-card__body">
          <ul className="instr-card__list">
            <li>Nuts and seeds</li>
            <li>Raw fruits and vegetables</li>
            <li>Whole grains</li>
            <li>Corn, beans, popcorn</li>
            <li>Red or purple liquids</li>
            <li>Alcohol</li>
          </ul>
        </div>
      </div>
      <div className="instr-card">
        <div className="instr-card__title">Clear liquids you can usually have (1 day before)</div>
        <div className="instr-card__body">
          <ul className="instr-card__list">
            <li>Water</li>
            <li>Clear broth</li>
            <li>Apple juice or white grape juice</li>
            <li>Plain coffee or tea without milk</li>
            <li>Gelatin</li>
            <li>Popsicles without red or purple dye</li>
          </ul>
        </div>
      </div>
      <div className="instr-card">
        <div className="instr-card__title">Medications to ask about</div>
        <div className="instr-card__body">
          <p className="instr-card__prose">Ask your doctor before changing any medication. Blood thinners, diabetes medications, iron supplements, and some anti-inflammatory medicines may need special instructions.</p>
        </div>
      </div>
      <div className="instr-card">
        <div className="instr-card__title">Call your clinic if</div>
        <div className="instr-card__body">
          <ul className="instr-card__list">
            <li>You cannot finish the prep solution</li>
            <li>You vomit repeatedly</li>
            <li>Your stool is not clear by procedure morning</li>
            <li>You accidentally ate solid food after starting clear liquids</li>
            <li>You do not have someone to drive you home</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ColonoscopyLocs() {
  const locs = [
    { name: '[System] Midtown Endoscopy Center',    dist: '0.8 mi', address: '245 W 38th St', checkin: '6th floor',   parking: 'Parking available',     phone: '(212) 555-0132' },
    { name: '[System] West Side Gastroenterology',  dist: '1.6 mi', address: '410 W 57th St', checkin: 'Suite 300',   parking: 'Garage parking nearby', phone: '(212) 555-0174' },
    { name: '[System] Downtown Endoscopy',          dist: '2.3 mi', address: '60 Hudson St',  checkin: 'Main lobby',  parking: 'Valet available',        phone: '(212) 555-0189' },
  ];
  return (
    <>
      <div className="proc-locs">
        {locs.map((loc, i) => (
          <div className="proc-loc" key={i}>
            <div className="proc-loc__main">
              <div className="proc-loc__name">{loc.name}</div>
              <div className="proc-loc__meta">
                <div className="meta-row">{Icon.MapPin()}<span>{loc.dist} · {loc.address}</span></div>
                <div className="meta-row">{Icon.Info()}<span>Check in: {loc.checkin}</span></div>
                <div className="meta-row">{Icon.Info()}<span>{loc.parking}</span></div>
                <div className="meta-row">{Icon.Phone()}<span>{loc.phone}</span></div>
              </div>
            </div>
            <div className="proc-loc__actions">
              <button className="btn btn--primary">Get directions</button>
              <button className="btn">Call location</button>
            </div>
          </div>
        ))}
      </div>
      <p className="proc-loc__note">Confirm your exact arrival time and location in your appointment instructions.</p>
    </>
  );
}

const COLONOSCOPY = {
  query: "How do I prepare for a colonoscopy?",
  chatLabel: "Colonoscopy prep",
  tabs: [
    { id: 'timeline',     label: 'Timeline',     icon: 'Calendar', count: 6, confidence: 'high' },
    { id: 'instructions', label: 'Instructions', icon: 'BookOpen', count: 4, confidence: 'high' },
    { id: 'locations',    label: 'Locations',    icon: 'MapPin',   count: 3, confidence: 'high' },
    { id: 'pages',        label: 'Pages',        icon: 'FileText', count: 5, confidence: 'high' },
  ],
  summary: [
    { text: "Preparation takes about " },
    { text: "5–7 days", cite: [1] },
    { text: " — mostly dietary adjustments leading up to a 24-hour bowel-cleansing routine the day before." },
    { text: " Follow your provider's instructions exactly: incomplete prep is the leading cause of repeat or canceled procedures", cite: [2] },
    { text: "." },
  ],
  sections: [
    {
      id: 'timeline',
      tab: 'timeline',
      title: 'Your prep timeline',
      body: () => (
        <window.TimelineStepper steps={[
          {
            when: '7 days before',
            title: 'Pick up your prep kit',
            detail: 'Your prep kit, laxative solution, and clear-liquid guide will be available at your [System] pharmacy. Tell your doctor about all medications — some may need to be paused.',
            list: [
              'Stop iron supplements',
              'Pause NSAIDs, such as ibuprofen or aspirin, only if your doctor approves',
              'Confirm a ride home — you cannot drive after sedation',
            ],
          },
          {
            when: '3 days before',
            title: 'Switch to a low-fiber diet',
            detail: 'Avoid nuts, seeds, raw fruits and vegetables, whole grains, and red meat.',
            list: [
              'OK: white rice, plain pasta, eggs, chicken, fish, white bread',
              'Avoid: salads, popcorn, corn, beans, brown rice, anything with seeds',
            ],
          },
          {
            when: '1 day before',
            title: 'Clear liquids only',
            detail: 'Starting the morning before your procedure, drink only clear liquids: water, broth, plain coffee or tea without milk, clear juice with no pulp, gelatin, and popsicles. Avoid red or purple liquids because they can look like blood during the procedure.',
          },
          {
            when: 'Evening before',
            title: 'Start the prep solution',
            detail: 'Drink half of your prescribed laxative solution according to your instructions, usually between 6–8 PM. Stay near a bathroom — bowel movements typically start within 1–3 hours.',
            list: [
              'Refrigerate the solution beforehand — it tastes better cold',
              'Use a straw to bypass taste buds',
              'Sip steadily, not all at once',
            ],
          },
          {
            when: 'Morning of',
            title: 'Finish prep, then stop drinking 2 hours before',
            detail: 'Finish the second half of your prep about 5 hours before the procedure. Stop all liquids 2 hours before. Wear loose, comfortable clothing.',
          },
          {
            when: 'After',
            title: 'Recovery and getting home',
            detail: "You'll need someone to drive you home because sedation effects can last for hours. Rest for the day. You can usually eat normally that evening. Some bloating and gas are normal.",
          },
        ]} />
      ),
    },
    {
      id: 'questions',
      tab: 'timeline',
      title: 'Questions to ask your doctor',
      body: () => (
        <div className="qa-list">
          <div className="qa-row">
            <div className="qa-row__q">Should I take my regular medications?</div>
            <div className="qa-row__a">Especially blood thinners, diabetes medication, and blood pressure medication.</div>
          </div>
          <div className="qa-row">
            <div className="qa-row__q">What if I have trouble with the prep?</div>
            <div className="qa-row__a">If you can't finish the solution, or your stool isn't clear by procedure morning, call the clinic — they may delay.</div>
          </div>
          <div className="qa-row">
            <div className="qa-row__q">When will I get results?</div>
            <div className="qa-row__a">Visual findings are shared right after; biopsy results typically take 5–7 days.</div>
          </div>
        </div>
      ),
    },
    {
      id: 'instructions',
      tab: 'instructions',
      title: 'Prep instructions',
      body: () => <ColonoscopyInstructions />,
    },
    {
      id: 'proc-locations',
      tab: 'locations',
      title: 'Colonoscopy locations',
      body: () => <ColonoscopyLocs />,
    },
    {
      id: 'pages-results',
      tab: 'pages',
      title: 'Related pages',
      body: () => (
        <window.PageResults items={[
          {
            kind: 'Patient instructions',
            url: '/learn/colonoscopy-prep',
            title: 'Colonoscopy preparation instructions',
            snippet: 'Step-by-step instructions for diet changes, clear liquids, bowel prep, and what to expect before your procedure.',
            meta: ['Clinician-reviewed', 'Patient instructions'],
          },
          {
            kind: 'Procedure',
            url: '/learn/colonoscopy',
            title: 'Colonoscopy',
            snippet: 'Learn why colonoscopies are done, what the procedure involves, and how results are shared.',
            meta: ['Clinician-reviewed'],
          },
          {
            kind: 'Locations',
            url: '/locations/endoscopy',
            title: 'Endoscopy locations',
            snippet: 'Find [System] endoscopy centers, addresses, parking details, and phone numbers.',
            meta: ['Directory', '3 locations'],
          },
          {
            kind: 'Patient education',
            url: '/learn/sedation-anesthesia',
            title: 'Anesthesia and sedation',
            snippet: 'Learn what to expect from sedation, why you need a ride home, and how long recovery may take.',
            meta: ['Clinician-reviewed'],
          },
          {
            kind: 'Billing and insurance',
            url: '/billing/procedures',
            title: 'Billing and insurance for procedures',
            snippet: 'Review coverage, estimates, and billing information for outpatient procedures.',
            meta: ['Updated Jan 2026'],
          },
        ]} />
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'S', name: '[System] GI Department',  title: 'Patient instructions reviewed by [System] gastroenterology team', date: 'Jan 2026', url: '#' },
    { num: 2, fav: 'S', name: '[System] GI Department',  title: 'Procedure preparation guidance from [System] endoscopy instructions', date: 'Apr 2026', url: '#' },
    { num: 3, fav: 'S', name: '[System] Endoscopy',      title: 'Location data from [System] endoscopy directory', date: 'May 2026', url: '#' },
    { num: 4, fav: 'S', name: '[System] Billing',        title: 'Billing information from [System] patient financial services', date: 'Feb 2026', url: '#' },
  ],
  followups: [
    "What if I can't finish the prep solution?",
    "Can I have coffee the morning of?",
    "How long does the procedure take?",
  ],
};

/* ============================================================ */
/* === PT_COVERAGE: insurance answer ========================== */
/* ============================================================ */
const PT_COVERAGE = {
  query: "Does my plan cover physical therapy?",
  chatLabel: "PT coverage",
  tabs: [
    { id: 'pages', label: 'Pages', icon: 'FileText', count: 4 },
    { id: 'doctors', label: 'Doctors', icon: 'Stethoscope', count: 7 },
    { id: 'services', label: 'Services', icon: 'Video', count: 5 },
    { id: 'locations', label: 'Locations', icon: 'MapPin', count: 3 },
  ],
  summary: [
    { text: "Yes — your plan covers physical therapy at in-network providers with a " },
    { text: "$40 copay per visit", cite: [1] },
    { text: " after your annual deductible is met. You're allowed up to 30 visits per calendar year without preauthorization. " },
    { text: "A referral from your primary care doctor is not required", cite: [2] },
    { text: " under your PPO plan." },
  ],
  sections: [
    {
      id: 'coverage',
      tab: 'pages',
      title: 'Coverage at a glance',
      body: () => (
        <window.CoverageCard
          plan="[Plan] PPO — Family"
          status="covered"
          copay={40}
          deductible={{met: '$320', total: '500'}}
          visitsPerYear={30}
          referralRequired={false}
          network={28}
        />
      ),
    },
    {
      id: 'in-network',
      tab: 'doctors',
      title: 'In-network physical therapists',
      body: () => (
        <>
          <p>28 physical therapists are in-network with your plan within 5 miles. Showing top-rated.</p>
          <window.CarouselSpecialties />
        </>
      ),
    },
    {
      id: 'how-to-use',
      tab: 'pages',
      title: 'How to use this benefit',
      body: () => (
        <ol className="bullet-list">
          <li>
            <div className="bullet-list__label">Choose an in-network PT</div>
            <div className="bullet-list__desc">All providers shown above are confirmed in-network. Out-of-network can cost $150+ per visit instead of $40.</div>
          </li>
          <li>
            <div className="bullet-list__label">Book your first visit</div>
            <div className="bullet-list__desc">No referral needed under your PPO. Most PTs will do an evaluation visit first to build a treatment plan.</div>
          </li>
          <li>
            <div className="bullet-list__label">Track your visit count</div>
            <div className="bullet-list__desc">You have 30 visits per calendar year — your PT's office will track this with you. Beyond 30, additional visits require preauth.</div>
          </li>
          <li>
            <div className="bullet-list__label">Pay your copay</div>
            <div className="bullet-list__desc">$40 at each visit after your deductible is met. You're $180 from your deductible — your first 2-3 visits will cost full price until then.</div>
          </li>
        </ol>
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'P', name: '[Plan]', title: 'PPO Family plan — benefits summary', date: 'Jan 2026', url: '#' },
    { num: 2, fav: 'P', name: '[Plan]', title: 'Referral requirements by service', date: 'Feb 2026', url: '#' },
    { num: 3, fav: 'S', name: '[System] Billing', title: 'Understanding deductibles & copays', date: 'Mar 2026', url: '#' },
  ],
  followups: [
    "What about chiropractic care?",
    "Is acupuncture covered?",
    "How do I check my deductible balance?",
    "Find PTs who accept evening appointments",
  ],
};

/* ============================================================ */
/* === CHEST_PAIN: placeholder for the emergency flow ========= */
/* ============================================================ */
const CHEST_PAIN = {
  query: "Chest pain and shortness of breath",
  chatLabel: "Chest pain and shortness of breath",
  tabs: [
    { id: 'emergency', label: 'Emergency guidance', icon: 'Alert', count: 1, confidence: 'high' },
    { id: 'er-locations', label: 'ER locations', icon: 'MapPin', count: 3, confidence: 'high' },
    { id: 'pages', label: 'Pages', icon: 'FileText', count: 4, confidence: 'high' },
  ],
  summary: [
    { text: "Chest pain with shortness of breath can be a " },
    { text: "medical emergency", cite: [1] },
    { text: ". If symptoms are severe, sudden, or worsening, " },
    { text: "call 911 or go to the nearest emergency department", cite: [2] },
    { text: "." },
  ],
  sections: [
    {
      id: 'when-to-call-911',
      tab: 'emergency',
      title: 'Call 911 if you have any of these',
      body: () => (
        <>
          <div className="callout callout--danger">
            <div className="callout__icon">{Icon.Alert()}</div>
            <div>
              <p className="callout__title">Do not drive yourself. Call 911 or have someone bring you to the nearest ER.</p>
              <p className="callout__body">Paramedics can start treatment on the way and the ER will be ready when you arrive.</p>
            </div>
          </div>
          <ul className="bullet-list">
            <li>
              <div className="bullet-list__label">Crushing, squeezing, or pressure-like chest pain</div>
              <div className="bullet-list__desc">Especially pain that radiates to your jaw, neck, shoulder, or down an arm.<sup><a href="#src-1" className="cite">1</a></sup></div>
            </li>
            <li>
              <div className="bullet-list__label">Sudden severe shortness of breath</div>
              <div className="bullet-list__desc">Particularly with sweating, nausea, lightheadedness, or a feeling of impending doom.</div>
            </li>
            <li>
              <div className="bullet-list__label">Pain with fainting or loss of consciousness</div>
              <div className="bullet-list__desc">Or chest pain that wakes you from sleep.</div>
            </li>
            <li>
              <div className="bullet-list__label">Symptoms that have lasted more than a few minutes</div>
              <div className="bullet-list__desc">Or that have come and gone over the last day.<sup><a href="#src-3" className="cite">3</a></sup></div>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'er-near-you',
      tab: 'er-locations',
      title: 'Emergency departments near you',
      body: () => (
        <window.UrgentCareList items={[
          {
            name: '[System] Midtown Emergency Department',
            wait: 8,
            dist: '0.9 mi',
            address: '245 W 38th St',
            closes: 'Open 24 / 7',
            phone: '(212) 555-0100',
            hourly: [22, 24, 26, 30, 35, 38, 36, 30, 28, 26, 24, 22, 20],
            nowIdx: 7,
          },
          {
            name: '[System] West Side Emergency',
            wait: 18,
            dist: '1.3 mi',
            address: '410 W 57th St',
            closes: 'Open 24 / 7',
            phone: '(212) 555-0110',
            hourly: [18, 22, 28, 36, 42, 44, 40, 35, 30, 26, 22, 20, 18],
            nowIdx: 7,
          },
          {
            name: '[System] Hudson Emergency',
            wait: 32,
            dist: '2.1 mi',
            address: '60 Hudson St',
            closes: 'Open 24 / 7',
            phone: '(212) 555-0120',
            hourly: [20, 25, 32, 40, 46, 48, 46, 42, 38, 34, 30, 26, 22],
            nowIdx: 7,
          },
        ]} />
      ),
    },
    {
      id: 'chest-pages',
      tab: 'pages',
      title: 'On [System].org',
      body: () => (
        <window.PageResults items={[
          {
            kind: 'Service line',
            url: '/services/emergency',
            title: 'Emergency Care',
            snippet: 'Around-the-clock emergency departments for life-threatening symptoms — chest pain, stroke, severe bleeding, difficulty breathing. Triage on arrival.',
            meta: ['24/7 service', 'Patient services'],
          },
          {
            kind: 'Patient education',
            url: '/learn/heart-attack-warning-signs',
            title: 'Heart attack warning signs',
            snippet: 'Symptoms vary between people and presentations differ between men and women. Learn what to look for and when to act.',
            meta: ['Clinician-reviewed', '5 min read'],
          },
          {
            kind: 'Patient education',
            url: '/learn/chest-pain-vs-anxiety',
            title: 'Chest pain vs. anxiety: how to tell',
            snippet: 'Anxiety and panic attacks can mimic cardiac symptoms. When in doubt, treat it as cardiac and get evaluated.',
            meta: ['Clinician-reviewed', '4 min read'],
          },
          {
            kind: 'Service line',
            url: '/services/cardiology',
            title: 'Cardiology',
            snippet: 'Follow-up evaluation, diagnostic testing, and ongoing management for heart conditions.',
            meta: ['Specialty', 'Outpatient'],
          },
        ]} />
      ),
    },
  ],
  sources: [
    { num: 1, fav: 'S', name: '[System] Cardiology', title: 'Chest pain — patient guide', date: 'Mar 2026', url: '#' },
    { num: 2, fav: 'S', name: '[System] Emergency Medicine', title: 'When to call 911', date: 'Apr 2026', url: '#' },
    { num: 3, fav: 'S', name: '[System] Clinical Library', title: 'Acute coronary syndrome — patient pathway', date: 'Feb 2026', url: '#' },
  ],
  followups: [
    "What does an ER visit cost on my plan?",
    "Where's the closest ER right now?",
    "Is it safer to take a cab or call 911?",
  ],
};

window.AlmaData = { BACK_PAIN, STRETCHES, PRIMARY_CARE, URGENT_CARE, COLONOSCOPY, PT_COVERAGE, CHEST_PAIN };
window.CarouselSpecialties = CarouselSpecialties;
window.CarouselLocations = CarouselLocations;
