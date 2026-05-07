import { useForm, ValidationError } from "@formspree/react";
import { getContact } from "../utils/storage";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgodlevj");
  const contact = getContact();

  if (state.succeeded) {
    return (
      <section className="section">
        <div className="container">
          <h1>Thank You</h1>
          <p className="section-text">
            Your enquiry has been sent successfully. We will get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container contact-grid">
        <div>
          <h1>Contact Us</h1>
          <p className="section-text">
            Ready to keep your event, venue, or business clean and professional?
            Get in touch with us today.
          </p>

          <div className="contact-info">
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Address:</strong> {contact.address}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Full Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input type="tel" name="phone" placeholder="Phone Number" />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <input type="email" name="email" placeholder="Email Address" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input type="text" name="service" placeholder="Service Needed" />
          <ValidationError prefix="Service" field="service" errors={state.errors} />

          <textarea
            name="message"
            placeholder="Tell us about your cleaning needs"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" className="btn btn-dark" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}