import React from "react";

const Grid = () => {
  return (
    <main className="">
      <section className="section-one">
        <div className="relative writeup">
          <p className="absolute -top-3.5 left-0 bg-background px-3 font-bold lg:text-xl">
            Strategic Planning
          </p>

          <div className="one">
            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              01
            </h1>

            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>
          </div>
        </div>

        <img
          className="pic"
          src="https://images.inc.com/uploaded_files/image/1920x1080/getty_637683624_365230.jpg"
          alt=""
          style={{ width: "100%" }}
        />
      </section>

      <section className="section-two">
        <img
          className="pic"
          src="https://png.pngtree.com/background/20230527/original/pngtree-3d-house-plans-in-pdf-picture-image_2767117.jpg"
          alt=""
          style={{ width: "100%" }}
        />

        <div className="relative writeup ">
          <p className="absolute -top-3.5 right-0 bg-background px-3 font-bold lg:text-xl">
            Custom Design
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              02
            </h1>
          </div>
        </div>
      </section>

      <section className="section-one">
        <div className="relative writeup ">
          <p className="absolute -top-3.5 left-0 bg-background px-3 font-bold lg:text-xl">
            Project Management
          </p>

          <div className="one">
            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              03
            </h1>

            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>
          </div>
        </div>

        <img
          className="pic"
          src="https://maisonparagon.ca/wp-content/uploads/2018/07/PM-with-house-and-plan-2.jpg.webp"
          alt=""
          style={{ width: "100%" }}
        />
      </section>

      <section className="section-two">
        <img
          className="pic"
          src="https://static.vecteezy.com/system/resources/previews/024/843/377/non_2x/blueprint-designs-and-a-home-model-for-a-construction-project-background-in-real-estate-housing-project-building-and-engineering-design-ai-generated-photo.jpg"
          alt=""
          style={{ width: "100%" }}
        />

        <div className="relative writeup ">
          <p className="absolute -top-3.5 right-0 bg-background px-3 font-bold lg:text-xl">
            Engineering Expertise
          </p>

          <div className="two">
            <p className="pt-4 font-semibold text-justify p-2 lg:text-lg text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              harum minus, fuga esse reiciendis accusantium ad quam molestias
              dignissimos soluta? Quasi soluta nulla quam sint expedita maxime
              aliquid quo aut, similique
            </p>

            <h1 className=" md:text-[700%] lg:text-[800%] text-[500%] leading-none font-bold ">
              04
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Grid;
