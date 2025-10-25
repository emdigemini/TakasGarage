export function AboutPage(){
  return (
    <div className="about">
      <div className="about__header">
        <h1 className="about__title">Built by Car Lovers</h1>
        <p className="about__description">
          TakasGarage was born from a simple belief.
          Every car enthusiast deserves access to their 
          dream machine and the tools to make it truly their own.
        </p>
      </div>

      <div className="about__our-story">
        <div className="our-story__img">
          <img src="../images/about/chaoyang-wheel.jpg" alt="" />
        </div>
        <div className="our-story__paragraph">
          <p>Our Story</p>
          <p>
            Created in 2025, TakasGarage was built by a small group of friends who share the same love for cars.
            We wanted to create a space where enthusiasts like us could explore, share ideas, and customize rides just for fun.
            <br /><br />
            What began as a hobby has grown into a lively online space for anyone who loves cars, 
            from classic JDM models to futuristic concepts.
            <br /><br />
            Today, TakasGarage is more than just a website. I'ts a community 
            where creativity, speed, and passion for cars come together.
          </p>
        </div>
      </div>

      <div className="about__our-values">
        <div className="our-values__header">
          <p>Our Values</p>
          <p>The principles that drive everything we do.</p>
        </div>
        <div className="our-values__cards">
          <div className="our-card">
            <div className="card__icon">
              <i className="bi bi-suit-heart"></i>
            </div>
            <p>Passion First</p>
            <p>Every car has a story. We help you write yours with vehicles that ignite your soul.</p>
          </div>
          <div className="our-card">
            <div className="card__icon">
              <i className="bi bi-bullseye"></i>
            </div>
            <p>Quality Guaranteed</p>
            <p>Meticulously curated collection of premium vehicles, each meeting our highest standards.</p>
          </div>
          <div className="our-card">
            <div className="card__icon">
              <i className="bi bi-people"></i>
            </div>
            <p>Community Driven</p>
            <p>A thriving community of enthusiasts sharing builds, tips, and automotive passion.</p>
          </div>
          <div className="our-card">
            <div className="card__icon">
              <i className="bi bi-wrench-adjustable"></i>
            </div>
            <p>Customization Experts</p>
            <p>Advanced tools and expert guidance to transform your vision into reality.</p>
          </div>
        </div>
      </div>

      <div className="about__mission-vision">
        <div className="our-mission">
          <div className="mission-icon">
            <i className="bi bi-bullseye"></i>
          </div>
          <p>Our Mission</p>
          <p>
            To democratize access to premium vehicles and empower enthusiasts with the tools, knowledge, 
            and community support needed to create their ultimate driving machines. 
            We believe every car lover should have the opportunity to own and customize their dream car.
          </p>
        </div>
        <div className="our-vision">
          <div className="vision-icon">
            <i className="bi bi-wrench-adjustable"></i>
          </div>
          <p>Our Vision</p>
          <p>
            To become the world's most trusted automotive platform where passion meets precision. 
            We envision a future where customization is accessible, transactions are seamless, 
            and every car enthusiast finds their perfect match whether stock or fully customized.
          </p>
        </div>
      </div>

      <div className="about__team">
        <div className="team__header">
          <p>Meet the Team</p>
          <p>A small team of car lovers dedicated to bringing your dream ride to life.</p>
        </div>
        <div className="our__team">
          <div className="team-card">
            <div className="team-img">
              <img src="../images/my-team/djP.jpg" alt="" />
            </div>
            <p>Dhenmark Opana</p>
          </div>
          <div className="team-card">
            <div className="team-img">
              <img src="../images/my-team/awra.jpg" alt="" />
            </div>
            <p>Kyle Martinez</p>
          </div>
          <div className="team-card">
            <div className="team-img">
              <img src="../images/my-team/diwata.jpg" alt="" />
            </div>
            <p>Ian Pedroso</p>
          </div>
          <div className="team-card">
            <div className="team-img">
              <img src="../images/my-team/meong.jpeg" alt="" />
            </div>
            <p>Christoper Romeroso</p>
          </div>
          <div className="team-card">
            <div className="team-img">
              <img src="../images/my-team/marlou.jpg" alt="" />
            </div>
            <p>Edwin Lopez Jr.</p>
          </div>
        </div>
      </div>

    </div>
  );
}