<div
  className={
    `flex-initial order-1 bg-green-900 relative` +
    (index % 2 === 0 ? "sm:order-2" : "sm:order-1")
  }
>
  <div className="relative overflow-hidden img-wrapper">
    <img src={info2.Image} className="w-full" />
    <div
      className="absolute left-0 right-0 z-20 mx-auto text-center mb-44 xl:w-60% w-80%"
      style={{ top: "63%", color: info2.color }}
    >
      <h3 className="lg:text-3xl sm:text-xl font-fraunces">{info2.Title}</h3>
      <p className="mt-2 text-base sm:text-sm md:mt-4 lg:mt-6 md:text-base lg:text-xl">
        {info2.Caption}
      </p>
    </div>
  </div>
</div>;
