const benefits = [
  {
    title: "The price",
    subtitle: "Get everything with a subscription.",
  },
  {
    title: "No limit",
    subtitle: "Get access to everything on the website.",
  },
  {
    title: "Cancel anytime",
    subtitle: "Pause or cancel your subscription.",
  },
];

export default function Benefits() {
  return (
    <div className="bg-black border-right">
      <div className="column-padding">
        <div className="content-grid xl">
          <div className="spacing-base">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="spacing-base">
                <h3>
                    {benefit.title}
                </h3>
                <div>{benefit.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
