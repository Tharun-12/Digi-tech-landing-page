import React from "react";
import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
  const handleRequestCall = () => {
    // Replace with your real "open lead modal" logic
    window.location.href = "/#contact";
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header onRequestCall={handleRequestCall} />

      {/* Hero */}
      <section className="bg-[#102E50] px-6 py-16 text-center text-white">
        <LockKeyhole className="mx-auto mb-4 h-12 w-12 text-red-400" />
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
          Your Privacy Matters
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Learn how we collect, use and protect your personal
          information.
        </p>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="mb-10 text-sm text-gray-500">
          Last Updated: November 18, 2026
        </p>

        <div className="space-y-10 leading-8">
          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Privacy Policy for iiiQbets
            </h2>
            <p>
              At iiiQbets, accessible from iqbetspro.com, one of our
              main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information
              that is collected and recorded by iiiQbets and how we
              use it.
            </p>
            <p className="mt-3">
              If you have additional questions or require more
              information about our Privacy Policy, do not hesitate
              to contact us.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              What Do We Do With Your Information?
            </h2>
            <p>
              When you purchase something from our store, as part of
              the buying and selling process, we collect the personal
              information you give us such as your name, address and
              email address.
            </p>
            <p className="mt-3">
              When you browse our store, we also automatically receive
              your computer's internet protocol (IP) address in order
              to provide us with information that helps us learn about
              your browser and operating system.
            </p>
            <p className="mt-3">
              Email marketing (if applicable): With your permission,
              we may send you emails about our store, new products and
              other updates.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Consent
            </h2>
            <p className="font-semibold text-[#102E50]">
              How do you get my consent?
            </p>
            <p className="mt-2">
              When you provide us with personal information to
              complete a transaction, verify your credit card, place
              an order, arrange for a delivery or return a purchase,
              we imply that you consent to our collecting it and using
              it for that specific reason only.
            </p>
            <p className="mt-3">
              If we ask for your personal information for a secondary
              reason, like marketing, we will either ask you directly
              for your expressed consent, or provide you with an
              opportunity to say no.
            </p>

            <p className="mt-6 font-semibold text-[#102E50]">
              How do I withdraw my consent?
            </p>
            <p className="mt-2">
              If after you opt-in, you change your mind, you may
              withdraw your consent for us to contact you, for the
              continued collection, use or disclosure of your
              information, at anytime, by contacting us at{" "}
              <a
                href="mailto:contact@iiiqbets.com"
                className="text-red-600 hover:text-red-700"
              >
                contact@iiiqbets.com
              </a>{" "}
              or mailing us at:
            </p>
            <div className="mt-4 rounded-xl bg-gray-50 p-6">
              <p>Skyline Beverly Park # D 402,</p>
              <p>Amruthahalli Main Road,</p>
              <p>Amruthahalli</p>
              <p>Bangalore – 560092</p>
            </div>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              How We Use Your Information
            </h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>
                Communicate with you, either directly or through one of
                our partners, including for customer service, to provide
                you with updates and other information relating to the
                website, and for marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Log Files
            </h2>
            <p>
              iiiQbets follows a standard procedure of using log
              files. These files log visitors when they visit
              websites. All hosting companies do this and a part of
              hosting services' analytics. The information collected
              by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the
              number of clicks. These are not linked to any
              information that is personally identifiable. The purpose
              of the information is for analyzing trends,
              administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Advertising Partners Privacy Policies
            </h2>
            <p>
              You may consult this list to find the Privacy Policy for
              each of the advertising partners of iiiQbets.
            </p>
            <p className="mt-3">
              Third-party ad servers or ad networks uses technologies
              like cookies, JavaScript, or Web Beacons that are used
              in their respective advertisements and links that appear
              on iiiQbets, which are sent directly to users' browser.
              They automatically receive your IP address when this
              occurs. These technologies are used to measure the
              effectiveness of their advertising campaigns and/or to
              personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p className="mt-3">
              Note that iiiQbets has no access to or control over
              these cookies that are used by third-party advertisers.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Third Party Privacy Policies
            </h2>
            <p>
              iiiQbets's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to
              consult the respective Privacy Policies of these
              third-party ad servers for more detailed information. It
              may include their practices and instructions about how
              to opt-out of certain options.
            </p>
            <p className="mt-3">
              You can choose to disable cookies through your
              individual browser options. To know more detailed
              information about cookie management with specific web
              browsers, it can be found at the browsers' respective
              websites.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>
            <p>
              Under the CCPA, among other rights, California consumers
              have the right to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Request that a business that collects a consumer's
                personal data disclose the categories and specific
                pieces of personal data that a business has collected
                about consumers.
              </li>
              <li>
                Request that a business delete any personal data about
                the consumer that a business has collected.
              </li>
              <li>
                Request that a business that sells a consumer's
                personal data, not sell the consumer's personal data.
              </li>
            </ul>
            <p className="mt-4">
              If you make a request, we have one month to respond to
              you. If you would like to exercise any of these rights,
              please contact us.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              GDPR Data Protection Rights
            </h2>
            <p>
              We would like to make sure you are fully aware of all of
              your data protection rights. Every user is entitled to
              the following:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold">The right to access:</span>{" "}
                You have the right to request copies of your personal
                data. We may charge you a small fee for this service.
              </li>
              <li>
                <span className="font-semibold">The right to rectification:</span>{" "}
                You have the right to request that we correct any
                information you believe is inaccurate. You also have
                the right to request that we complete the information
                you believe is incomplete.
              </li>
              <li>
                <span className="font-semibold">The right to erasure:</span>{" "}
                You have the right to request that we erase your
                personal data, under certain conditions.
              </li>
              <li>
                <span className="font-semibold">
                  The right to restrict processing:
                </span>{" "}
                You have the right to request that we restrict the
                processing of your personal data, under certain
                conditions.
              </li>
              <li>
                <span className="font-semibold">
                  The right to object to processing:
                </span>{" "}
                You have the right to object to our processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <span className="font-semibold">
                  The right to data portability:
                </span>{" "}
                You have the right to request that we transfer the data
                that we have collected to another organization, or
                directly to you, under certain conditions.
              </li>
            </ul>
            <p className="mt-4">
              If you make a request, we have one month to respond to
              you. If you would like to exercise any of these rights,
              please contact us.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Children's Information
            </h2>
            <p>
              Another part of our priority is adding protection for
              children while using the internet. We encourage parents
              and guardians to observe, participate in, and/or monitor
              and guide their online activity.
            </p>
            <p className="mt-3">
              iiiQbets does not knowingly collect any Personal
              Identifiable Information from children under the age of
              13. If you think that your child provided this kind of
              information on our website, we strongly encourage you to
              contact us immediately and we will do our best efforts
              to promptly remove such information from our records.
            </p>
          </article>

          <article>
            <h2 className="mb-3 text-2xl font-bold text-[#102E50]">
              Contact Us
            </h2>
            <p>
              If you have questions or requests regarding this
              Privacy Policy, please contact:
            </p>
            <div className="mt-4 rounded-xl bg-gray-50 p-6">
              <p className="font-semibold text-[#102E50]">iiiQbets</p>
              <p>Email: contact@iiiqbets.com</p>
              <p>Phone: +91-6364833139</p>
              <p className="mt-2">
                Skyline Beverly Park # D 402,
                <br />
                Amruthahalli Main Road,
                <br />
                Amruthahalli,
                <br />
                Bangalore – 560092
              </p>
            </div>
          </article>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-8">
          <Link
            to="/terms-and-conditions"
            className="font-semibold text-red-600 hover:text-red-700"
          >
            Read our Terms & Conditions →
          </Link>
        </div>
      </section>

      <Footer onRequestCall={handleRequestCall} />
    </main>
  );
};

export default PrivacyPolicy;