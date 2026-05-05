export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I’m interested in your cleaning services. Please provide more details."
  );

  return (
    <a
      href={`https://wa.me/27746237153?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
    >
      WhatsApp
    </a>
  );
}