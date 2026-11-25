import HeroBoardFrame from "@/components/sections/hero/HeroBoardFrame";
import FeaturesBentoWidgets from "@/components/sections/features/FeaturesBentoWidgets";
import PricingTrayPlans from "@/components/sections/pricing/PricingTrayPlans";
import GalleryTiltCards from "@/components/sections/gallery/GalleryTiltCards";
import AboutStatementIconRow from "@/components/sections/about/AboutStatementIconRow";
import ContactDarkFormCard from "@/components/sections/contact/ContactDarkFormCard";
import ScrollToneBackdrop from "@/components/kit/ScrollToneBackdrop";
import LoaderChipFill from "@/components/loaders/LoaderChipFill";

export default function HomePage() {
  return (
    <>
      <ScrollToneBackdrop

      />

      <LoaderChipFill
        label="Crack Fillers Caulking"
      />

      <div id="home" data-webild-section="HeroBoardFrame" data-webild-section-id="HeroBoardFrame-1" data-section="home">
        <HeroBoardFrame
          className="bg-transparent"
          tag="Wisconsin Masonry Contractors"
          title="Caulking, Tuckpointing and Masonry Repair in Wisconsin"
          description="Joint sealants, waterproofing, and brick and block repair from Milwaukee to Green Bay. Locally owned since 2014. Fully insured."
          primaryButton={{
            text: "Call (920) 838-4678",
            href: "tel:9208384678"
          }}
          imageSrc="https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618371677-sxmksi93.jpg"
          imageAlt="large brick building exterior"
          introDelay={1.2}
          kpis={[
            {
              label: "Trade Experience",
              value: "25 Years",
              delta: "2014",
              trend: [
                10,
                15,
                18,
                20,
                22,
                25
              ]
            },
            {
              label: "Fully Insured",
              value: "100%",
              delta: "Active"
            },
            {
              label: "Service Region",
              value: "WI State",
              trend: [
                3,
                3,
                3,
                3,
                3,
                3
              ]
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBentoWidgets" data-webild-section-id="FeaturesBentoWidgets-1" data-section="services" data-tone="deep" data-gallery>
        <FeaturesBentoWidgets
          className="bg-transparent"
          tag="Masonry Services"
          title="Protection and repair for Wisconsin masonry"
          description="Commercial and residential caulking, sealing, and structural brick restoration across Wisconsin."
          backgroundImageSrc="https://img.b2bpic.net/free-photo/photo-wall-texture-pattern_58702-14570.jpg"
          items={[
            {
              tag: "Sealants",
              title: "Joint Sealants & Caulking",
              description: "High-performance sealants preventing water intrusion and climate wear on concrete and masonry joints.",
              tags: [
                "Control Joints",
                "Expansion Joints",
                "Silicone",
                "Urethane"
              ]
            },
            {
              title: "Trade Experience",
              description: "Decades of dedicated field work in masonry sealing and structural brick repair.",
              value: "25",
              valueLabel: "years of experience"
            },
            {
              title: "Waterproofing",
              description: "Proactive exterior sealing engineered to protect walls against Wisconsin freeze-thaw cycles.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618371677-dvghoh2u.jpg",
              imageAlt: "freshly caulked vertical brick joint"
            },
            {
              title: "Masonry Scope",
              description: "Full-spectrum surface protection and joint renewal for commercial and residential buildings.",
              rows: [
                {
                  label: "Commercial Caulking",
                  value: "Available"
                },
                {
                  label: "Residential Tuckpointing",
                  value: "Available"
                },
                {
                  label: "Brick & Block Repair",
                  value: "Available"
                }
              ]
            },
            {
              title: "Tuckpointing",
              description: "Removing deteriorated mortar and installing fresh joints to restore brick structural integrity.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618371673-pxa0lvu8.jpg",
              imageAlt: "Stonecutter closeup"
            },
            {
              title: "Brick & Block Repair",
              description: "Targeted repair and stone replacement for cracked or spalling masonry structures.",
              value: "100%",
              valueLabel: "fully insured service"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingTrayPlans" data-webild-section-id="PricingTrayPlans-1" data-section="pricing">
        <PricingTrayPlans
          tag="Coverage"
          title="Wisconsin service"
          highlight="areas"
          description="Serving southeastern, Fox Valley, and northeastern Wisconsin counties."
          items={[
            {
              name: "Southeastern",
              description: "Milwaukee to West Bend corridor.",
              price: "Covered",
              period: "5 primary cities",
              features: [
                "Milwaukee",
                "Waukesha",
                "Racine",
                "Kenosha",
                "West Bend"
              ],
              cta: {
                text: "Get a quote",
                href: "#contact-dark-form-card"
              }
            },
            {
              name: "Fox Valley",
              description: "Appleton through Manitowoc region.",
              price: "Covered",
              period: "5 primary cities",
              highlighted: true,
              features: [
                "Appleton",
                "Oshkosh",
                "Fond du Lac",
                "Sheboygan",
                "Manitowoc"
              ],
              cta: {
                text: "Get a quote",
                href: "#contact-dark-form-card"
              }
            },
            {
              name: "Northeastern",
              description: "Green Bay up to Marinette.",
              price: "Covered",
              period: "5 primary cities",
              features: [
                "Green Bay",
                "De Pere",
                "Door County",
                "Shawano",
                "Marinette"
              ],
              cta: {
                text: "Get a quote",
                href: "#contact-dark-form-card"
              }
            }
          ]}
          enterprise={{
            label: "Extended region",
            title: "Need service outside these areas?",
            description: "We take select commercial and residential masonry projects across Wisconsin. Contact us for location availability.",
            cta: {
              text: "Get a quote",
              href: "#contact-dark-form-card"
            }
          }}
        />
      </div>

      <div id="gallery-tilt-cards" data-webild-section="GalleryTiltCards" data-webild-section-id="GalleryTiltCards-1" data-section="gallery-tilt-cards">
        <GalleryTiltCards
          tag="Portfolio"
          title="Our recent work"
          description="Examples of joint sealing, tuckpointing, and brick repair projects across eastern Wisconsin."
          linkLabel="Get a Free Quote"
          ariaLabel="Gallery of completed masonry and caulking projects"
          items={[
            {
              title: "Commercial Joint Sealing",
              tag: "Milwaukee",
              date: "2025",
              description: "High-grade silicone joint sealants applied to exterior concrete panels on a commercial facility.",
              href: "#contact-dark-form-card",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618371675-tazytfpm.jpg",
              imageAlt: "brick wall with window and scaffolding"
            },
            {
              title: "Precision Perimeter Caulking",
              tag: "Appleton",
              date: "2025",
              description: "Weatherproof caulking sealing around commercial windows and exterior masonry wall openings.",
              href: "#contact-dark-form-card",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618371676-qbtn0wk6.jpg",
              imageAlt: "freshly caulked vertical brick joint"
            },
            {
              title: "Brick Structure Restoration",
              tag: "Green Bay",
              date: "2025",
              description: "Replacing damaged clay bricks and repairing mortar joints on a residential exterior.",
              href: "#contact-dark-form-card",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618659753-0ha986uj.jpg",
              imageAlt: "Photo of wall texture pattern"
            },
            {
              title: "Structural Tuckpointing",
              tag: "Sheboygan",
              date: "2025",
              description: "Grinding out deteriorated mortar joints and refilling with matching breathable mortar.",
              href: "#contact-dark-form-card",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618667733-pgau9lga.jpg",
              imageAlt: "Classic Beautiful Textured Brick Wall"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutStatementIconRow" data-webild-section-id="AboutStatementIconRow-1" data-section="about" data-tone="card">
        <AboutStatementIconRow
          className="bg-transparent"
          title="Crack Fillers Caulking delivers precision sealants, tuckpointing, and masonry repairs across Wisconsin backed by 25 years of trade experience."
          items={[
            {
              icon: "ShieldCheck",
              title: "Fully Insured Contractor",
              description: "Complete liability coverage on every commercial and residential masonry job."
            },
            {
              icon: "Award",
              title: "25 Years Experience",
              description: "Decades of proven trade expertise in structural sealing and brick repair."
            },
            {
              icon: "MapPin",
              title: "Locally Owned Since 2014",
              description: "Proudly serving property owners from Milwaukee to Green Bay with dependable service."
            }
          ]}
        />
      </div>

      <div id="contact-dark-form-card" data-webild-section="ContactDarkFormCard" data-webild-section-id="ContactDarkFormCard-1" data-section="contact-dark-form-card">
        <ContactDarkFormCard
          title="Request a Free Masonry Quote"
          formTitle="Send Your Project Details"
          fields={{
            name: "Full Name",
            email: "Email Address",
            company: "City / Location",
            message: "Project Details"
          }}
          placeholders={{
            name: "Your full name",
            email: "crackfillerscaulking@gmail.com",
            company: "e.g. Milwaukee or Appleton",
            message: "Describe your caulking or tuckpointing project details"
          }}
          submitText="Send Request"
          successText="Thank you. We will contact you with an estimate shortly."
          imageSrc="https://storage.googleapis.com/webild/users/user_3CAbs2mtVAarsbwSrty8hTuKmCw/uploaded-1795618848413-p36fjel2.jpg"
          imageAlt="The industrial Builder works with a professional angle grinder to cut bricks and build interior walls. Electrician."
          ariaLabel="Get a free quote from Crack Fillers Caulking"
        />
      </div>
    </>
  );
}
