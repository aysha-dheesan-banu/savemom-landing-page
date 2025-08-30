import { MessageCircle, Watch, Smartphone, Activity, Users, Heart, Shield, UserCheck, TestTube, Stethoscope } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Allobot",
    description: "An AI Driven Chat Bot used for providing health care and pregnancy tips"
  },
  {
    icon: Watch,
    title: "Smart Wearable Devices",
    description: "IoT-based health bands for pregnant women. Monitors vital signs such as heart rate, blood pressure, body temperature, and oxygen levels. Sends alerts in case of anomalies."
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Companion app for mothers, healthcare workers, and doctors. Tracks pregnancy milestones and health data. Provides reminders for checkups, medications, and nutrition."
  },
  {
    icon: Activity,
    title: "Real-Time Health Monitoring",
    description: "Continuous monitoring of maternal health parameters. Data is accessible by healthcare providers for remote consultation and emergency response."
  },
  {
    icon: Users,
    title: "Doctor and Hospital Connectivity",
    description: "Connects patients with nearby hospitals. Facilitates telemedicine consultations."
  },
  {
    icon: Heart,
    title: "Community Health Support",
    description: "Offers education on nutrition, hygiene, and maternal care. Engages families and communities to support pregnant women."
  }
];

const products = [
  {
    icon: Shield,
    title: "Allocate",
    description: "AlloGate ensures secure and seamless access to healthcare systems, enabling hospitals, clinics, and doctors to manage patient data efficiently. With advanced authentication, encrypted data sharing, and AI-powered access control."
  },
  {
    icon: UserCheck,
    title: "Allobaby",
    description: "AlloBaby is an innovative maternal and child care platform designed to support expectant mothers and their partners throughout pregnancy and early childcare. It offers continuous pregnancy monitoring by tracking vital signs."
  },
  {
    icon: TestTube,
    title: "Allolab",
    description: "AlloLab enhances maternal care with AI-powered diagnostics, providing real-time access to lab reports, test results, and patient data. Its intelligent dashboard streamlines workflows, enabling doctors to make informed decisions."
  },
  {
    icon: Stethoscope,
    title: "Allodoc",
    description: "AlloDoc enables doctors to provide seamless maternal care through virtual consultations and real-time monitoring. Its AI-powered dashboard offers instant access to patient data, risk alerts, and streamlined scheduling for efficient teleconsultations."
  }
];

const FeaturesSection = () => {
  return (
    <>
      {/* Product Features Banner */}
      <div className="bg-primary/5 py-4">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-medium">Product Features</span>
        </div>
      </div>

      {/* Main Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Savemom Virtual Maternal Healthcare Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Virtual maternal care with wearables and AI. Monitor health, predict risks, and connect with 
              doctors — especially for rural communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-8 rounded-xl bg-card soft-shadow hover:elegant-shadow smooth-transition animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 smooth-transition">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 secondary-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={product.title}
                className="bg-white p-8 rounded-xl soft-shadow hover:elegant-shadow smooth-transition animate-scale-in text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 primary-gradient rounded-full flex items-center justify-center mb-6 mx-auto">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;