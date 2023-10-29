import { useCallback } from "react";
import { Button, Icon, h3 } from "@mui/material";

const Ky = () => {
  const onKyClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='landingPage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="relative bg-white w-full h-[4798px] overflow-hidden">
      <section
        className="absolute top-[-1px] left-[0px] bg-white w-[1512px] overflow-hidden flex flex-col items-start justify-start gap-[158px] text-center text-mid text-white font-manrope"
        id="intro"
        data-scroll-to="landingPage"
      >
        <header
          className="self-stretch bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-5 pr-5 pl-[30px] gap-[1373px] text-left text-17xl text-gray-400 font-manrope border-[2px] border-solid border-black lg:flex-row lg:gap-[650px] lg:items-start lg:justify-start md:flex-row md:gap-[200px] md:items-start md:justify-start sm:flex-col sm:gap-[1px] sm:items-start sm:justify-start"
          id="head"
        >
          <div className="flex-1 flex flex-col items-start justify-start relative gap-[10px] sm:flex-[unset] sm:self-stretch">
            <h1
              className="m-0 relative text-inherit tracking-[-0.04em] leading-[125.02%] capitalize font-extrabold font-inherit cursor-pointer z-[0]"
              id="logo"
              onClick={onKyClick}
            >
              ky
            </h1>
            <div className="absolute my-0 mx-[!important] top-[39px] left-[44px] rounded-[50%] bg-darkgoldenrod w-1.5 h-1.5 z-[1]" />
          </div>
          <div className="flex-1 h-10 flex flex-col items-start justify-end gap-[6px] sm:flex-[unset] sm:self-stretch">
            <div className="relative bg-gray-200 w-[24.7px] h-[3px]" />
            <div className="relative bg-gray-200 w-[29.3px] h-[3px]" />
            <div className="relative bg-gray-200 w-[26.6px] h-[3px]" />
          </div>
        </header>
        <div className="w-[1065px] overflow-hidden flex flex-col items-end justify-center py-0 pr-0 pl-[100px] box-border">
          <div className="self-stretch overflow-hidden flex flex-col items-end justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[33px]">
                <blockquote
                  className="m-0 bg-gray-400 flex flex-row items-start justify-start py-0 px-[45px]"
                  id="hi everyone"
                >
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                    hi everyone!
                  </div>
                </blockquote>
                <img
                  className="relative w-[70px] h-[58.3px]"
                  loading="eager"
                  alt=""
                  src="/hand.svg"
                />
              </div>
              <h1
                className="m-0 self-stretch relative text-[108px] tracking-[-0.04em] leading-[111.02%] capitalize font-extrabold font-inherit text-gray-200 text-left"
                id="name"
              >
                <p className="m-0">Kyrin Kalonji</p>
                <p className="m-0">Software Engineer</p>
              </h1>
              <div className="bg-gray-400 w-[312px] flex flex-row items-center justify-center py-0 px-[45px] box-border">
                <div className="flex-1 relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                  i’m passionate about
                </div>
              </div>
              <h3
                className="m-0 relative text-5xl tracking-[0.02em] leading-[198.02%] font-semibold font-inherit text-gray-200 text-left inline-block w-[720px] h-[98px] shrink-0"
                id="passion"
              >{`Make designs mainly logos, visual identities, apps & websites, social media and magazines.`}</h3>
            </div>
            <Button
              color="primary"
              name="more about me"
              variant="contained"
              endIcon={<Icon>arrow_forward_sharp</Icon>}
            >
              More About me
            </Button>
          </div>
        </div>
      </section>
      <section
        className="absolute top-[3816px] left-[0px] bg-white w-[1512px] overflow-hidden flex flex-col items-center justify-center gap-[50px]"
        id="contact"
      >
        <Button
          className="relative"
          sx={{ width: 700 }}
          color="primary"
          variant="contained"
        >
          REach me
        </Button>
        <section
          className="self-stretch overflow-hidden flex flex-col items-center justify-start py-0 pr-0 pl-[100px] gap-[52px] text-left text-[96px] text-black font-helvetica-neue"
          id="contact"
        >
          <div className="w-[1413px] overflow-hidden flex flex-col items-start justify-end gap-[39px]">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
              <h1
                className="m-0 self-stretch relative text-inherit font-bold font-inherit inline-block h-[100px] shrink-0"
                id="get in touch"
              >
                <p className="m-0">Get in touch 📡</p>
              </h1>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-center justify-center text-17xl">
              <div className="self-stretch h-[417px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[276px] lg:flex-row lg:gap-[1px] lg:items-start lg:justify-start md:flex-row md:gap-[1px] md:items-start md:justify-start sm:flex-col sm:gap-[1px] sm:items-start sm:justify-start">
                <div className="w-[460px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[56px]">
                    <h2
                      className="m-0 self-stretch relative text-inherit font-medium font-inherit whitespace-pre-wrap"
                      id="code"
                    >
                      <p className="m-0">
                        <span className="text-darkmagenta">if</span>
                        <span className="text-black">{` `}</span>
                        <span className="text-steelblue">(</span>
                        <span>wantToConnect == true</span>
                        <span className="text-steelblue">{`) {`}</span>
                      </p>
                      <p className="m-0 text-goldenrod">
                        <span className="text-black">{`    `}</span>
                        <span>sendEmail</span>
                        <span className="text-steelblue">()</span>
                        <span className="text-black">;</span>
                      </p>
                      <p className="m-0">
                        <span className="text-steelblue">{`}`}</span>
                        <span>{` else `}</span>
                        <span className="text-steelblue">{`{`}</span>
                      </p>
                      <p className="m-0 text-goldenrod">
                        <span className="text-black">{`    `}</span>
                        <span>browseMyProjects</span>
                        <span className="text-steelblue">()</span>
                        <span className="text-black">;</span>
                      </p>
                      <p className="m-0 text-steelblue">{`}`}</p>
                    </h2>
                    <div className="w-[296px] overflow-hidden flex flex-col items-start justify-start gap-[18px] text-[35px] text-dimgray">
                      <h1
                        className="m-0 self-stretch relative text-inherit font-medium font-inherit"
                        id="socials"
                      >
                        Some socials
                      </h1>
                      <div className="flex flex-row items-start justify-start gap-[40px]">
                        <img
                          className="relative w-[57.6px] h-[57.6px]"
                          alt=""
                          src="/git.svg"
                        />
                        <img
                          className="relative w-[60px] h-[60px]"
                          alt=""
                          src="/-icon-linkedin.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-end text-5xl text-gray-500 sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[48px]">
                    <div className="self-stretch rounded-10xs flex flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-600">
                      <h3 className="m-0 flex-1 relative" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch rounded-10xs flex flex-row items-center justify-start py-3 px-4 border-[0.5px] border-solid border-gray-600">
                        <h3 className="m-0 flex-1 relative text-inherit italic font-medium font-inherit">
                          Email
                        </h3>
                      </div>
                    </div>
                    <div className="self-stretch rounded-10xs flex flex-row items-start justify-start py-3 px-4 border-[0.5px] border-solid border-gray-600">
                      <h3 className="m-0 flex-1 relative text-inherit italic font-medium font-inherit">{`Enter your  Message `}</h3>
                    </div>
                    <div className="self-stretch bg-gray-400 h-[62px] flex flex-col items-center justify-center text-center text-mid text-white font-manrope">
                      <div className="flex flex-row items-center justify-start gap-[17px]">
                        <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold inline-block w-[137px] shrink-0">
                          Send
                        </div>
                        <div className="relative text-[10px] tracking-[0.1em] leading-[234.52%] uppercase font-icomoon-free inline-block w-[14.2px] shrink-0">
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer
            className="bg-gray-300 w-[1414px] overflow-hidden"
            id="foot"
          />
        </section>
      </section>
      <section
        className="absolute top-[981px] left-[0px] bg-white w-[1512px] overflow-hidden flex flex-col items-center justify-center py-0 px-[200px] box-border gap-[69px] text-center text-101xl text-darkslategray font-jost"
        id="about"
      >
        <div className="w-[344px] overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch flex flex-row items-start justify-start relative gap-[10px]">
            <h1
              className="m-0 flex-1 relative text-inherit tracking-[-0.04em] leading-[150.02%] uppercase font-light font-inherit z-[0]"
              id="about header"
            >
              about
            </h1>
            <div className="flex-1 absolute my-0 mx-[!important] top-[78px] left-[120px] text-3xl tracking-[0.1em] leading-[126.02%] uppercase font-inconsolata text-gray-200 text-left z-[1]">
              who am i
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[54px] text-mid text-white font-manrope">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[27px]">
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
              <div className="self-stretch overflow-hidden flex flex-col items-center justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                  <div className="bg-gray-400 flex flex-row items-start justify-start py-0 px-[62px]">
                    <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                      about me
                    </div>
                  </div>
                  <div className="self-stretch relative tracking-[0.02em] leading-[237.52%] text-gray-200 text-left">{`I feel like this could be a really bad idea, I am craving sex so much right noe that i dont even know if i can function like this for a very long time. What was i doing putting myself through all of this. do i even want this or am i simply forcing myself to go through with this because i dont wanna be lonely. `}</div>
                </div>
                <div className="self-stretch flex flex-col items-end justify-start gap-[14px]">
                  <div className="bg-gray-400 flex flex-row items-end justify-start py-0 px-[55px]">
                    <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                      education
                    </div>
                  </div>
                  <div className="self-stretch relative tracking-[0.02em] leading-[237.52%] text-gray-200 text-left">{`I feel like this could be a really bad idea, I am craving sex so much right noe that i dont even know if i can function like this for a very long time. What was i doing putting myself through all of this. do i even want this or am i simply forcing myself to go through with this because i dont wanna be lonely. `}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                <div className="bg-gray-400 flex flex-row items-start justify-start py-0 px-[75px]">
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                    work
                  </div>
                </div>
                <div className="self-stretch relative tracking-[0.02em] leading-[237.52%] text-gray-200 text-left">{`I feel like this could be a really bad idea, I am craving sex so much right noe that i dont even know if i can function like this for a very long time. What was i doing putting myself through all of this. do i even want this or am i simply forcing myself to go through with this because i dont wanna be lonely. `}</div>
              </div>
            </div>
          </div>
          <Button
            sx={{ width: 176 }}
            color="primary"
            variant="contained"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
          >
            Portfolio
          </Button>
        </div>
      </section>
      <section
        className="absolute top-[1963px] left-[0px] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-white w-[1512px] overflow-hidden flex flex-col items-end justify-start py-0 px-[70px] box-border gap-[123px] text-center text-5xl text-white font-manrope"
        id="portfolio"
      >
        <div className="w-[925px] overflow-hidden flex flex-col items-start justify-center text-101xl text-darkslategray font-jost">
          <div className="w-[561px] flex flex-row items-start justify-start relative gap-[10px]">
            <h1
              className="m-0 flex-1 relative text-inherit tracking-[-0.04em] leading-[150.02%] uppercase font-light font-inherit z-[0]"
              id="portfolio h1"
            >
              portfolio
            </h1>
            <div className="flex-1 absolute my-0 mx-[!important] top-[65px] left-[210px] text-3xl tracking-[0.1em] leading-[126.02%] uppercase font-inconsolata text-gray-200 text-left z-[1]">
              latest work
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start gap-[31px] lg:flex-row lg:gap-[5px] lg:items-end lg:justify-start md:flex-col md:gap-[5px] md:items-end md:justify-start">
          <img
            className="relative w-[918px] h-[450px] object-cover"
            alt=""
            src="/project image@2x.png"
          />
          <div className="flex-1 relative h-[424px] md:flex-[unset] md:self-stretch">
            <div className="absolute top-[-3px] left-[0px] bg-gray-400 w-[424px] flex flex-row items-center justify-center py-5 px-[184px] box-border">
              <h3
                className="m-0 relative text-inherit tracking-[0.1em] leading-[234.52%] uppercase font-semibold font-inherit inline-block w-[101px] shrink-0"
                id="title"
              >
                Muse
              </h3>
            </div>
            <div className="absolute top-[122px] left-[0px] w-[423.9px] h-[290.8px] overflow-hidden text-mid">
              <h5
                className="m-0 absolute top-[16px] left-[-3px] bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-4 text-inherit font-inherit"
                id="tech stack"
              >
                <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                  React
                </div>
              </h5>
              <h6
                className="m-0 absolute top-[70px] left-[0px] bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-4 text-inherit font-inherit"
                id="tech stack"
              >
                <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                  typescript
                </div>
              </h6>
              <div className="absolute top-[132px] left-[0px] w-[182px] h-10 overflow-hidden flex flex-row items-center justify-start gap-[25px]">
                <h6
                  className="m-0 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-[9px] text-inherit font-inherit"
                  id="tech stack"
                >
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                    figma
                  </div>
                </h6>
                <h6
                  className="m-0 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-2 text-inherit font-inherit"
                  id="tech stack"
                >
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                    mysql
                  </div>
                </h6>
              </div>
              <div className="absolute top-[247px] left-[-0.5px] w-[463px] overflow-hidden flex flex-row items-center justify-start gap-[26px] text-sm text-black">
                <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-[42.1px] h-[39.7px]"
                    alt=""
                    src="/-icon-github.svg"
                  />
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-extrabold inline-block w-[166px] h-[33px] shrink-0">
                    View source code
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start">
                  <img
                    className="relative w-[41.9px] h-[43.8px]"
                    alt=""
                    src="/-icon-link-2.svg"
                  />
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-extrabold inline-block w-[135px] h-[33px] shrink-0">
                    View code
                  </div>
                </div>
              </div>
              <div className="absolute top-[195px] left-[0px] w-[316px] overflow-hidden flex flex-row items-center justify-start gap-[20px]">
                <li
                  className="flex-1 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-4"
                  id="tech stack"
                >
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                    mongodb
                  </div>
                </li>
                <div className="flex-1 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-4">
                  <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                    tailwind css
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-mid lg:flex-row lg:gap-[1px] lg:items-start lg:justify-start md:flex-col md:gap-[1px] md:items-start md:justify-start">
          <div className="flex-1 relative h-[450.3px] md:flex-[unset] md:self-stretch">
            <div className="absolute top-[346px] left-[264px] bg-gray-400 flex flex-row items-center justify-center py-0 px-[5px]">
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                tailwind css
              </div>
            </div>
            <h6
              className="m-0 absolute top-[224px] left-[253px] bg-gray-400 flex flex-row items-center justify-center py-0 px-[11px] text-inherit font-inherit"
              id="tech stack"
            >
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                react native
              </div>
            </h6>
            <h6
              className="m-0 absolute top-[285px] left-[197px] bg-gray-400 flex flex-row items-center justify-center py-0 px-3 text-inherit font-inherit"
              id="tech stack"
            >
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                figma
              </div>
            </h6>
            <h6
              className="m-0 absolute top-[285px] left-[302px] bg-gray-400 flex flex-row items-center justify-center py-0 px-[11px] text-inherit font-inherit"
              id="tech stack"
            >
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                express
              </div>
            </h6>
            <h6
              className="m-0 absolute top-[163px] left-[322px] bg-gray-400 flex flex-row items-center justify-center py-0 px-3 text-inherit font-inherit"
              id="tech stack"
            >
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                redux
              </div>
            </h6>
            <h6
              className="m-0 absolute top-[0px] left-[2px] bg-gray-400 w-[407px] flex flex-row items-center justify-center py-5 px-[145px] box-border text-inherit font-inherit"
              id="tech stack"
            >
              <div className="flex-1 relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                huskybites
              </div>
            </h6>
            <div className="absolute top-[408px] left-[262px] flex flex-row items-center justify-start text-sm text-black">
              <img
                className="relative w-[42.3px] h-[42.3px]"
                alt=""
                src="/-icon-link-21.svg"
              />
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-extrabold inline-block w-[135px] h-[33px] shrink-0">
                View code
              </div>
            </div>
            <div className="absolute top-[410px] left-[0px] flex flex-row items-center justify-start gap-[12px] text-sm text-black">
              <img
                className="relative w-[42.1px] h-[39.7px]"
                alt=""
                src="/-icon-github.svg"
              />
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-extrabold inline-block w-[166px] h-[33px] shrink-0">
                View source code
              </div>
            </div>
            <div className="absolute top-[346px] left-[110px] bg-gray-400 flex flex-row items-center justify-center py-0 px-[5px]">
              <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                javascript
              </div>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[450px] object-cover ml-[-465px] md:flex-[unset] md:self-stretch"
            alt=""
            src="/project img@2x.png"
          />
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-center">
          <div className="self-stretch flex flex-row items-end justify-start gap-[31px] lg:flex-row lg:gap-[5px] lg:items-end lg:justify-start md:flex-col md:gap-[5px] md:items-end md:justify-start">
            <img
              className="relative w-[918px] h-[450px] object-cover"
              alt=""
              src="/project img1@2x.png"
            />
            <div className="flex-1 relative h-[424px] md:flex-[unset] md:self-stretch">
              <div className="absolute top-[-3px] left-[0px] bg-gray-400 w-[424px] flex flex-row items-center justify-center py-5 px-[184px] box-border">
                <h3
                  className="m-0 relative text-inherit tracking-[0.1em] leading-[234.52%] uppercase font-semibold font-inherit inline-block w-24 shrink-0"
                  id="title"
                >
                  Muse
                </h3>
              </div>
              <div className="absolute top-[122px] left-[0px] w-[423.9px] overflow-hidden flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border gap-[8px] text-mid">
                <div className="w-[316px] overflow-hidden flex flex-col items-start justify-start gap-[14px]">
                  <h6
                    className="m-0 bg-gray-400 w-[89px] overflow-hidden flex flex-row items-center justify-center py-0 px-4 box-border text-inherit font-inherit"
                    id="tech stack"
                  >
                    <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                      React
                    </div>
                  </h6>
                  <h6
                    className="m-0 bg-gray-400 w-[139px] overflow-hidden flex flex-row items-center justify-center py-0 px-4 box-border text-inherit font-inherit"
                    id="tech stack"
                  >
                    <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                      typescript
                    </div>
                  </h6>
                  <div className="w-[182px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[25px]">
                    <h6
                      className="m-0 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-[9px] text-inherit font-inherit"
                      id="tech stack"
                    >
                      <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                        figma
                      </div>
                    </h6>
                    <h6
                      className="m-0 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-2 text-inherit font-inherit"
                      id="tech stack"
                    >
                      <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                        mysql
                      </div>
                    </h6>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[20px]">
                    <h6
                      className="m-0 flex-1 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-4 text-inherit font-inherit"
                      id="tech stack"
                    >
                      <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                        mongodb
                      </div>
                    </h6>
                    <h6
                      className="m-0 flex-1 bg-gray-400 overflow-hidden flex flex-row items-center justify-center py-0 px-4 text-inherit font-inherit"
                      id="tech stack"
                    >
                      <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-semibold">
                        tailwind css
                      </div>
                    </h6>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[26px] text-sm text-black">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[12px]">
                    <img
                      className="relative w-[42.1px] h-[39.7px]"
                      alt=""
                      src="/-icon-github.svg"
                    />
                    <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-extrabold inline-block w-[166px] h-[33px] shrink-0">
                      View source code
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <img
                      className="relative w-[41.9px] h-[43.8px]"
                      alt=""
                      src="/-icon-link-2.svg"
                    />
                    <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-extrabold inline-block w-[135px] h-[33px] shrink-0">
                      View code
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ky;
