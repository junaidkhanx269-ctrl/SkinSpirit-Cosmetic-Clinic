import { Treatment, PriceItem, Review, BeforeAfterCase } from '../types';
import heroSydneyImg from '../assets/images/hero_sydney_clinic_model_1792302362982.jpg';
import antiWrinkleImg from '../assets/images/service_anti_wrinkle_1792302363235.jpg';
import dermalFillersImg from '../assets/images/service_dermal_fillers_1792302364222.jpg';
import advancedSkinImg from '../assets/images/service_advanced_skin_1792302365199.jpg';
import clinicSuiteImg from '../assets/images/clinic_luxury_suite_1792302365394.jpg';

export { heroSydneyImg, antiWrinkleImg, dermalFillersImg, advancedSkinImg, clinicSuiteImg };

export const CLINIC_INFO = {
  name: 'SkinSpirit Cosmetic Clinic',
  address: '650 George St, Sydney NSW 2000',
  addressShort: '650 George St, Sydney CBD',
  phone: '+61 479 066 568',
  phoneClean: '61479066568',
  hours: '11:00 AM – 7:00 PM',
  hoursDays: 'Monday – Saturday',
  tagline: 'Cosmetic injectables & advanced skin treatments backed by 10+ years expertise',
  website: 'skinspiritclinic.com.au',
  googleMapsUrl: 'https://maps.google.com/?q=650+George+St,+Sydney+NSW+2000',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.441113063855!2d151.20456187677843!3d-33.878297973224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2499d30561%3A0xe543c8d35ebfffc9!2s650%20George%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau',
};

export const getWhatsAppLink = (customMessage?: string) => {
  const defaultMsg = "Hi SkinSpirit Clinic, I'd like to book an aesthetic consultation at your 650 George St clinic.";
  const encoded = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${CLINIC_INFO.phoneClean}?text=${encoded}`;
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'anti-wrinkle',
    title: 'Anti-Wrinkle Injections',
    subtitle: 'Forehead, Frown & Crow’s Feet Smoothing',
    startingPrice: 149,
    duration: '20–30 mins',
    downtime: 'Zero downtime',
    image: antiWrinkleImg,
    popularAreas: ['Frown Lines (11s)', 'Forehead Lines', 'Crow’s Feet', 'Masseter Slimming', 'Lip Flip'],
    description: 'Precision micro-doses of purified muscle-relaxing proteins to soften unwanted expression lines while preserving your natural facial animation.',
    benefits: [
      'Softens dynamic wrinkles without frozen appearance',
      'Doctor & AHPRA Registered Nurse led consultations',
      'Masseter slimming for facial contouring & teeth grinding',
      'Results visible within 3–7 days, lasting up to 4 months'
    ],
    details: {
      overview: 'Our cosmetic injectables philosophy at SkinSpirit Sydney is grounded in undetectable refinement. We gently relax the hyperactive muscles causing creases while protecting your organic expressions. You will simply look well-rested, refreshed, and radiant.',
      targetConcerns: ['Forehead horizontal lines', 'Glabellar frown crease', 'Eye smile lines', 'Jaw clenching & wide jaw', 'Pebbled chin texture'],
      procedureTime: '20 minutes in our private suite',
      resultsDuration: '3 to 4 months on average',
      aftercare: ['Keep upright for 4 hours', 'Avoid strenuous gym workouts for 24 hours', 'No facial massages or saunas for 48 hours']
    }
  },
  {
    id: 'dermal-fillers',
    title: 'Dermal Fillers',
    subtitle: 'Subtle Lip Hydration & Facial Balancing',
    startingPrice: 299,
    duration: '30–45 mins',
    downtime: '1–2 days mild swelling',
    image: dermalFillersImg,
    popularAreas: ['Natural Lip Refresh', 'Cheekbone Contouring', 'Chin Projection', 'Jawline Definition', 'Tear Trough'],
    description: '100% premium TGA-approved hyaluronic acid gels meticulously placed to restore youthful facial architecture with strict anti-duck-lip restraint.',
    benefits: [
      'Subtle, soft hydration with crisp Cupid’s bow definition',
      'Zero overfilled or unnatural "duck lip" aesthetics',
      'Custom facial proportion mapping by senior injectors',
      'Reversible, biocompatible premium hyaluronic formulas'
    ],
    details: {
      overview: 'We believe that the best cosmetic filler is invisible. Our injectors use micro-cannulas and micro-droplet placement to blend seamlessly with your native facial anatomy, restoring lost volume, defining jawlines, and hydrating lips with effortless elegance.',
      targetConcerns: ['Thin or asymmetric lips', 'Flattened mid-face cheekbones', 'Receding or weak chin', 'Hollow under-eye dark circles', 'Marionette lines'],
      procedureTime: '30 to 45 minutes including topical numbing',
      resultsDuration: '9 to 18 months depending on treatment area',
      aftercare: ['Apply clean cold compress if needed', 'Avoid alcohol and vigorous exercise for 24h', 'Sleep slightly elevated on first night']
    }
  },
  {
    id: 'advanced-skin',
    title: 'Advanced Skin Therapies',
    subtitle: 'Medical Microneedling & Clinical Peels',
    startingPrice: 199,
    duration: '45–60 mins',
    downtime: 'Mild pink flush (12–24h)',
    image: advancedSkinImg,
    popularAreas: ['Dermapen 4 Microneedling', 'Clinical Chemical Peels', 'Profhilo Bio-Remodelling', 'Exosome Infusion'],
    description: 'Hospital-grade dermal rejuvenation targeting collagen synthesis, uneven pigmentation, acne scarring, and glass-skin radiance.',
    benefits: [
      'Genuine Dermapen 4 certified medical collagen induction',
      'Custom clinical acids tailored to your Fitzpatrick skin type',
      'Targets stubborn melasma, sun damage, and enlarged pores',
      'High-potency growth factors and hyaluronic infusion'
    ],
    details: {
      overview: 'Beyond injectables, true beauty begins with structural skin health. Our Sydney CBD clinic utilizes cutting-edge medical microneedling and doctor-formulated peels to stimulate cellular turnover, repair elastin, and restore luminous dermal clarity.',
      targetConcerns: ['Textured skin & enlarged pores', 'Acne scars & post-inflammatory marks', 'Pigmentation & sun spots', 'Dull, dehydrated barrier', 'Fine micro-creping'],
      procedureTime: '45 to 60 minutes with cooling peptide mask',
      resultsDuration: 'Long-term cellular remodelling with cumulative sessions',
      aftercare: ['Apply medical mineral SPF50+ daily', 'Avoid active retinol and AHA/BHA for 5 days', 'Keep skin deeply hydrated with hyaluronic serum']
    }
  }
];

export const PRICE_LIST: PriceItem[] = [
  // Anti-Wrinkle
  { name: '1 Major Area (Frown or Forehead)', specification: 'TGA-Approved Type A', price: '$149', category: 'anti-wrinkle' },
  { name: '2 Major Areas (e.g. Forehead + Frown)', specification: 'Most requested combination', price: '$279', popular: true, category: 'anti-wrinkle' },
  { name: '3 Major Areas (Full Upper Face)', specification: 'Frown, Forehead & Crow’s Feet', price: '$389', popular: true, category: 'anti-wrinkle' },
  { name: 'Masseter Jaw Slimming / Bruxism', specification: 'Full therapeutic dosage', price: '$399', category: 'anti-wrinkle' },
  { name: 'Lip Flip / Gummy Smile Correction', specification: 'Subtle muscular release', price: '$99', category: 'anti-wrinkle' },
  { name: 'Hyperhidrosis (Underarm Sweating)', specification: 'Up to 100 units medical protocol', price: '$799', category: 'anti-wrinkle' },

  // Dermal Fillers
  { name: 'Lip Hydration & Subtlety (0.5mL)', specification: 'Ultra-soft hydration, natural boundary', price: '$299', category: 'fillers' },
  { name: 'Full Natural Lip Contouring (1.0mL)', specification: 'Plumpness, symmetry & hydration', price: '$449', popular: true, category: 'fillers' },
  { name: 'Cheekbone Architecture (1.0mL)', specification: 'Structural lift & mid-face contour', price: '$499', category: 'fillers' },
  { name: 'Chin & Jawline Definition (1.0mL)', specification: 'Profile balance & crisp jaw angle', price: '$499', category: 'fillers' },
  { name: 'Tear Trough Under-Eye (1.0mL)', specification: 'Micro-cannula technique', price: '$550', category: 'fillers' },
  { name: 'Profhilo® 2mL Bio-Remodelling', specification: '100% pure high-concentration HA', price: '$699', popular: true, category: 'fillers' },

  // Advanced Skin
  { name: 'Dermapen 4 Medical Microneedling', specification: 'Full face + Hyla Active serum infusion', price: '$199', popular: true, category: 'skin' },
  { name: 'Dermapen 4 + Exosome Regenerative Ampoule', specification: '5 billion bio-active exosomes', price: '$349', category: 'skin' },
  { name: 'Aesthetic Medical Peel (Lactic / Mandelic)', specification: 'Customized brightening & refining', price: '$149', category: 'skin' },
  { name: 'Cosmelan® Depigmentation Protocol', specification: 'Clinical mask + full 3-month homecare', price: '$1,199', category: 'skin' },

  // Packages
  { name: 'Sydney CBD Refresh Package', specification: '3 Anti-wrinkle areas + 0.5mL Lip Hydration', price: '$599', popular: true, category: 'packages' },
  { name: 'Total Facial Harmonisation', specification: 'Full upper face + 2mL Contouring Filler', price: '$1,199', category: 'packages' },
  { name: 'Glass Skin Trio (3x Dermapen 4)', specification: 'Package of 3 sessions with peptide masks', price: '$499', category: 'packages' }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sienna R.',
    suburb: 'Barangaroo, Sydney',
    treatment: 'Natural Lip Filler (0.8mL)',
    rating: 5,
    comment: 'I was terrified of duck lips after seeing so many bad jobs online. SkinSpirit was recommended by my colleague on George St. The practitioner is a genuine artist. My lips look hydrated, soft, and completely natural—my boyfriend didn’t even realize I had filler, just said I looked gorgeous!',
    date: 'March 2026'
  },
  {
    id: '2',
    name: 'Dr. James W.',
    suburb: 'Martin Place, Sydney CBD',
    treatment: 'Anti-Wrinkle (3 Areas) & Masseters',
    rating: 5,
    comment: 'Being in corporate law, I needed someone discreet who wouldn’t freeze my face during court. The clinic at 650 George St is whisper-quiet and stunning. The masseter treatment stopped my teeth grinding completely and slimmed my jaw subtly. Outstanding medical professionalism.',
    date: 'February 2026'
  },
  {
    id: '3',
    name: 'Chloe M.',
    suburb: 'Surry Hills',
    treatment: 'Dermapen 4 & Bio-Remodelling',
    rating: 5,
    comment: 'Best skin clinic in Sydney hands down. The attention to detail, immaculate private suites, and after-hours availability until 7PM make it so easy after work. My skin hasn’t glowed like this since my early twenties.',
    date: 'April 2026'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'lips',
    title: 'Natural Lip Volume & Boundary Hydration',
    category: 'Dermal Fillers',
    treatment: '0.7mL Ultra-Fine Hyaluronic Gel',
    timeframe: '2 weeks post-treatment',
    description: 'Subtle enhancement focusing strictly on vertical hydration lines and Cupid’s bow definition, maintaining anatomical proportions without outward projection.',
    beforeImage: antiWrinkleImg,
    afterImage: dermalFillersImg,
    details: 'Client requested natural lip balance without noticeable swelling. Notice the clean restoration of vermilion borders and organic softness.'
  },
  {
    id: 'wrinkle',
    title: 'Upper Face Smoothing & Expressive Animation',
    category: 'Anti-Wrinkle',
    treatment: '3 Areas TGA-Approved Micro-Dosing',
    timeframe: '14 days post-treatment',
    description: 'Smooth forehead and relaxed frown line appearance with full retention of natural eyebrow elevation and genuine smile lines.',
    beforeImage: clinicSuiteImg,
    afterImage: heroSydneyImg,
    details: 'Custom calibrated dosage avoiding heaviness over the brow while completely eliminating horizontal stress creases.'
  }
];

export const WHY_GEORGE_ST_POINTS = [
  {
    title: '2min from Town Hall Station',
    badge: 'Transit Excellence',
    desc: 'Located at 650 George St, directly opposite World Square. Effortless 2-minute stroll from Town Hall train station and the Chinatown light rail stop directly outside our doors.',
    detail: 'Undercover access ensures you arrive relaxed and private, regardless of weather.'
  },
  {
    title: 'Private Consultation Suites',
    badge: 'Discreet Luxury',
    desc: 'Acoustically soundproofed, limestone-finished architectural treatment rooms overlooking heritage George Street. Never a crowded waiting room or uncomfortable public encounters.',
    detail: 'Direct private elevator access and staggered scheduling ensure absolute client confidentiality.'
  },
  {
    title: 'After-hours till 7PM',
    badge: 'CBD Convenience',
    desc: 'Thoughtfully designed for busy Sydney professionals. Open 11:00 AM to 7:00 PM Monday through Saturday so you can book without disrupting your workday.',
    detail: 'Lunchtime express appointments or post-work relaxation slots available daily.'
  }
];
