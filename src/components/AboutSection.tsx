const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">About Us</h2>
        <div className="mt-2 mx-auto w-16 h-1 rounded-full bg-primary" />

        <p className="mt-8 text-muted-foreground leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
          Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
        </p>
        <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis 
          dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
