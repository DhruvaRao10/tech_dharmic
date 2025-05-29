import Image from "next/image";

const imageStyle = {
  border: "3px solid #000000",
};

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="w-full relative" style={{ height: "30vh" }}>
        <Image src="/poster.jpeg" alt="poster" fill />
      </div>

      <div className="relative -mt-8 ml-90 w-35 h-35">
        <div className="w-full h-full rounded-lg overflow-hidden border-3 shadow-lg">
          <Image
            src="/dp.png"
            alt="dp"
            fill
            className="object-cover"
            style={imageStyle}
          />
        </div>
      </div>

      <div className="mt-4 ml-90">
        <h1 className="text-4xl font-bold">सुदिनमस्तु !</h1>
        <p style={{ lineHeight: "2.5" }} className="text-2xl font-light">
          Hi i'm Dhruva, in my final year of my CS course at NIT Allahabad
          welcome to my corner of this universe.
        </p>
      </div>

      <div className="mt-8 ml-90 pb-8">
        <h2 className="text-3xl mb-4 font-bold">
          <u>A bit about my experience</u>
          <ul
            className="text-xl font-lato space-y-4"
            style={{ lineHeight: "2.0" }}
          >
            <li className="flex">
              <span className="mr-2">•</span>
              <span>
                I interned at a US startup as a product development and data
                science intern my work there mostly was RAG pipelines and
                front-end from scratch for their healthcare related products.
              </span>
            </li>
            <li className="flex">
              <span className="mr-2">•</span>
              <span>
                I worked at an org based in India as a Machine learning intern.
                I worked on a project for an American sales company to build an
                AI agents pipeline to process and give actionable insights on
                their sales calls.
              </span>
            </li>
          </ul>{" "}
        </h2>
      </div>

      <div className="ml-90 pb-8">
        <h2 className="text-3xl mb-4 font-bold">
          <u>My Interests</u>
          <p className="text-xl mb-4 font-lato" style={{ lineHeight: "2.0" }}>
            <li>
              I love reading about model architectures, NLP techniques and the
              underlying math used to build them .
            </li>
            <li>
              Love following rocket launches from SpaceX, ISRO and understanding
              aerospace engineering, rocket science
            </li>
            <li>
              Geo-politics and Indic history, history in general is very
              interesting as historical patterns and events seem to repeat
              themselves.
            </li>
            <li>
              My first love was Physics yet to finish all the numericals in the
              Resnick Halliday and Irodov book though ):
            </li>
          </p>
        </h2>
      </div>

      <div className="ml-90 pb-8">
        <h2 className="text-3xl mb-4 font-bold">
          <u>What i'm up to</u>
          <p className="text-xl mb-4 font-lato" style={{ lineHeight: "2.0" }}>
            <li>
              Iterating and doing experiments by implementing research papers
              that i am interested in i've been reading research papers on
              Diffusion Models recently .
            </li>
            <li>
              Working on multiple side projects that one is on a version of a
              tokenizer from scratch for Sanskrit, another had to do with
              integrating lm's in pdfs .
            </li>
            <li>
              Have recently started participating in kaggle competitions and
              revisiting competitive programming which i had stopped doing about
              6 months ago .
            </li>
          </p>
        </h2>
      </div>

      <div className="ml-90 pb-12">
        <h2 className="text-3xl mb-4 font-bold">
          <u>Connect With Me</u>
        </h2>
        <div className="flex space-x-6">
          <a
            href="https://x.com/tech_dharmic"
            className="flex items-center text-xl hover:text-blue-500"
          >
            <div className="w-8 h-8 mr-2 flex items-center justify-center">
              <span className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </span>
            </div>
            Twitter
          </a>
          <a
            href="https://github.com/DhruvaRao10"
            className="flex items-center text-xl hover:text-gray-700"
          >
            <div className="w-8 h-8 mr-2 flex items-center justify-center">
              <span className="text-2xl">
                <Image src="/github.png" alt="github" width={24} height={24} />
              </span>
            </div>
            GitHub
          </a>
          <a
            className="flex items-center text-xl hover:text-red-500"
          >
            <div className="w-8 h-8 mr-2 flex items-center justify-center">
              <span className="text-2xl">
                <Image src="/gmail.png" alt="gmail" width={24} height={24} />
              </span>
            </div>
            dhruvabantwalrao@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
