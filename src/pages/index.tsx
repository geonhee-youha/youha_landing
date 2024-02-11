import { Box, Rating, SxProps, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "../components/atoms/Container";
import { theme } from "../themes/theme";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { grey } from "@mui/material/colors";
import Button from "../components/atoms/Button";
import { BeltBanner } from "../components/organisms/BeltBanner";
import MainNav from "../components/organisms/MainNav";
import _ from "lodash";
import Shorts from "../components/templates/index/shorts";
import Section01 from "../components/templates/index/Section01";
import Icon from "../components/atoms/Icon";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import youhaBlue from "../constants/youhaBlue";
import Footer from "../components/templates/index/Footer";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const infos: { icon: IconName, title: any, description: any }[] = [
  {
    icon: 'user-tie',
    title: '광고주 회원',
    description: '2만명+',
  },
  {
    icon: 'user-tie-hair-long',
    title: '광고대행사 회원',
    description: '1.5만명+',
  },
  {
    icon: 'money-bill',
    title: '크리에이터 섭외 에산',
    description: '월 300억',
  }
]

const services: { icon: IconName, title: any, description: any }[] = [
  {
    icon: 'user-tie',
    title: '유하 인증 에이전시',
    description: '유하가 심사하고 인증한 크리에이터 에이전시, 소속사가 견적서를 보내드립니다.',
  },
  {
    icon: 'calendar-alt',
    title: '정확한 단가와 일정',
    description: '유하 인증 에이전시가 섭외 가능한 크리에이터의 단가와 일정, 브랜드와 핏이 맞는 이유까지 함께 제공합니다.',
  },
  {
    icon: 'cloud-arrow-up',
    title: '영상 업로드까지 안전하게',
    description: '유하를 통해 안전하게 비용을 집행하고, 인증 에이전시가 광고 계약부터 업로드 관리까지 꼼꼼하게 진행합니다.',
  },
  {
    icon: 'handshake',
    title: '원스톱 크리에이터 섭외 서비스 유하',
    description: '유튜버 데이터 1등 서비스 유하가 데이터만으로 해소하지 못했던 광고주의 불편함을 해결합니다.',
  }
]

const reviews = [
  {
    title: '삼성 갤럭시 S23',
    type: '광고주',
    description: '예상 단가가 아닌 실제 단가로 섭외 가능한 크리에이터 리스트를 다양하게 받아볼 수 있어 크리에이터를 찾아보는 시간을 크게 줄였어요. 섭외 업무가 줄어서 콘텐츠 기획에 집중할 수 있어 좋아요.'
  },
  {
    title: '송월타올',
    type: '광고주',
    description: '생각해보지 못 한 크리에이터를 리스트에서 발견했는데 저희 제품에 딱 맞는 분이었고, 크리에이터분과 콘텐츠 아이디어 기획도 함께 진행할 수 있어서 큰 도움이 되었습니다. 다양한 가격의 크리에이터를 추천받아 좋았습니다.'
  },
  {
    title: '비타500',
    type: '광고주',
    description: '제품 런칭 시점에 맞춰 급하게 SNS 광고를 진행해야 해서 유하에 신청서를 넣었는데 예상보다 빠르게 섭외 가능한 크리에이터 리스트를 받아볼 수 있어서 온에어 일정에 맞춰 만족스러운 퀄리티로 광고를 집행할 수 있었어요. '
  }
]

export default function Index() {
  const [ready, setReady] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      let sectionHeights = [0, 0, 0, 0];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const Intro: HTMLDivElement | null = document.querySelector(`.Intro`);
      const GlobalHeader: HTMLDivElement | null =
        document.querySelector(`.GlobalHeader`);
      const GlobalHeaderBorderLeft: HTMLDivElement | null =
        document.querySelector(`.GlobalHeader .BorderLeft`);
      const GlobalHeaderBorderCenter: HTMLDivElement | null =
        document.querySelector(`.GlobalHeader .BorderCenter`);
      const GlobalHeaderBorderRight: HTMLDivElement | null =
        document.querySelector(`.GlobalHeader .BorderRight`);
      const Background: HTMLDivElement | null =
        document.querySelector(`.Background`);
      const MainNav: HTMLDivElement | null = document.querySelector(`.MainNav`);
      const MainNavLine: HTMLDivElement | null =
        document.querySelector(`.MainNavLine`);
      const MainNavBorderLeft: HTMLDivElement | null =
        document.querySelector(`.MainNav .BorderLeft`);
      const MainNavBorderRight: HTMLDivElement | null = document.querySelector(
        `.MainNav .BorderRight`
      );
      const BeltBanner: HTMLDivElement | null =
        document.querySelector(`.BeltBanner`);
      const BeltBannerHeight = BeltBanner?.offsetHeight ?? 0;
      if (
        GlobalHeader !== null &&
        Background !== null &&
        GlobalHeaderBorderLeft !== null &&
        GlobalHeaderBorderCenter !== null &&
        GlobalHeaderBorderRight !== null &&
        MainNav !== null &&
        MainNavLine !== null &&
        MainNavBorderLeft !== null &&
        MainNavBorderRight !== null &&
        Intro !== null
      ) {
        const targetScrollPoint = windowHeight / 3;
        const MainNavScrollTop = MainNavLine.getBoundingClientRect().top;
        if (scrollY > 0) {
          GlobalHeader.style.background = `rgba(21, 21, 21, 0.6)`;
          GlobalHeader.style.backdropFilter = `blur(4px)`;
          GlobalHeaderBorderLeft.style.left = `0%`;
          GlobalHeaderBorderRight.style.right = `0%`;
          if (MainNavScrollTop <= 64 + BeltBannerHeight) {
            GlobalHeaderBorderLeft.style.opacity = `0`;
            GlobalHeaderBorderCenter.style.opacity = `0`;
            GlobalHeaderBorderRight.style.opacity = `0`;
            MainNavBorderLeft.style.left = `0%`;
            MainNavBorderRight.style.right = `0%`;
            MainNav.style.position = "fixed";
            MainNav.style.top = `${BeltBannerHeight + 64}px`;
            MainNav.style.left = "0";
            MainNav.style.right = "0";
            MainNav.style.background = `rgba(21, 21, 21, 0.6)`;
            MainNav.style.backdropFilter = `blur(4px)`;
          } else {
            GlobalHeaderBorderLeft.style.opacity = `1`;
            GlobalHeaderBorderCenter.style.opacity = `1`;
            GlobalHeaderBorderRight.style.opacity = `1`;
            MainNavBorderLeft.style.left = `100%`;
            MainNavBorderRight.style.right = `100%`;
            MainNav.style.position = "relative";
            MainNav.style.top = "initial";
            MainNav.style.left = "initial";
            MainNav.style.right = "initial";
            MainNav.style.background = `rgba(21, 21, 21, 0)`;
            MainNav.style.backdropFilter = `blur(0px)`;
          }
        } else {
          GlobalHeader.style.background = `rgba(0, 0, 0, 0)`;
          GlobalHeader.style.backdropFilter = `blur(0px)`;
          GlobalHeaderBorderLeft.style.left = `100%`;
          GlobalHeaderBorderRight.style.right = `100%`;
        }
        Background.style.opacity = `${(targetScrollPoint - scrollY) / targetScrollPoint
          }`;
        Intro.style.opacity = `${(targetScrollPoint - scrollY) / targetScrollPoint
          }`;
        Intro.style.transform = `translateY(-${(scrollY / 30) * 2}px)`;
        if (Intro !== null) {
          if (scrollY >= 44) {
            Intro.style.zIndex = `-1`;
          } else {
            Intro.style.zIndex = `1`;
          }
        }
      }
      const Sections: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(`.Section`);
      const NavBtns: NodeListOf<HTMLDivElement> =
        document.querySelectorAll(`.NavBtn`);
      if (Intro !== null) {
        for (let i = 0; i < Sections.length; i += 1) {
          const IntroHeight = Intro.offsetHeight;
          sectionHeights[0] = IntroHeight;
          const Section: HTMLDivElement = Sections[i];
          sectionHeights[i + 1] = Section.offsetHeight;
          const prevHeights = sectionHeights.slice(0, i + 1);
          const targetHeights = sectionHeights.slice(0, i + 2);
          const prevHeight = prevHeights.reduce(function add(a, b) {
            return a + b;
          }, 0);
          const sumHeight = targetHeights.reduce(function add(a, b) {
            return a + b;
          }, 0);
          const allHeight = sectionHeights.reduce(function add(a, b) {
            return a + b;
          }, 0);
          if (
            scrollY + 64 * 2 + BeltBannerHeight >= prevHeight &&
            scrollY + 64 * 2 + BeltBannerHeight < sumHeight
          ) {
            NavBtns[i].style.opacity = `1`;
          } else {
            NavBtns[i].style.opacity = `0.4`;
            if (scrollY <= sectionHeights[1]) {
              NavBtns[0].style.opacity = `1`;
            }
            if (scrollY + 64 * 2 + BeltBannerHeight >= allHeight) {
              NavBtns[Sections.length - 1].style.opacity = `1`;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener(`resize`, handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Background ready={ready} setReady={setReady} />
      <Content ready={ready} />
      <Footer />
    </>
  );
}

function Background({
  ready,
  setReady,
}: {
  ready: boolean;
  setReady: Dispatch<SetStateAction<boolean>>;
}) {
  const onVideoReady = () => {
    setReady(true);
  };
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: 0,
          p: theme.spacing(`100vh`, 0, 0, 0),
          zIndex: -1,
          "& video": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            objectFit: "cover",
          },
        }}
        className="Background"
      >
        <ReactPlayer
          url={`videos/universe-02.mp4`}
          autoPlay
          playing
          muted
          loop
          playsinline
          onReady={onVideoReady}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 1) 100%), linear-gradient(rgba(0, 0, 0, 0) ${800 / 2
              }px, rgba(0, 0, 0, 1) 100%)`,
            "@media(max-width: 480px)": {
              background: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 1) 100%), linear-gradient(rgba(0, 0, 0, 0) ${640 / 2
                }px, rgba(0, 0, 0, 1) 100%)`,
            },
          }}
        />
      </Box>
    </>
  );
}

function Content({ ready }: { ready: boolean }) {
  const { ref, inView } = useInView();
  const [className, setClassName] = useState<string>("");
  useEffect(() => {
    if (ready) setClassName("shown");
  }, [inView, ready]);
  const tempPress = () => {
    setClassName(className !== "" ? "" : "shown");
  };
  const onClickButton = (e: any) => {
    e.stopPropagation();
    const element: HTMLDivElement | null = document.querySelector(
      `.Section${3}`
    );
    const BeltBanner: HTMLDivElement | null =
      document.querySelector(`.BeltBanner`);
    const BeltBannerHeight = BeltBanner?.offsetHeight ?? 0;
    if (element !== null) {
      window.scrollTo({
        top: element.offsetTop - 64 - 44 - BeltBannerHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const webHeight = 960;
  const mobileHeight = 640;
  return (
    <>
      <Box
        sx={{
          p: theme.spacing(`calc(${webHeight}px)`, 0, 0, 0),
          "@media(max-width: 480px)": {
            p: theme.spacing(`calc(${mobileHeight}px)`, 0, 0, 0),
          },
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: 64 + 40,
          left: 0,
          right: 0,
          width: "100%",
          p: theme.spacing(`calc(${webHeight}px - 64px - 40px)`, 0, 0, 0),
          "@media(max-width: 480px)": {
            top: 64 + 56,
            p: theme.spacing(`calc(${mobileHeight}px -  64px - 56px)`, 0, 0, 0),
          },
        }}
        ref={ref}
        className="Intro"
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
          }}
        >
          <Container
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
            onClick={tempPress}
          >
            <Box
              sx={{
                transform: `rotate(-90deg)`,
                transition: `all 1s ease-in-out`,
                "&.shown": {
                  transform: `rotate(0deg)`,
                },
                "& *": {
                  textAlign: "center",
                },
              }}
              className={className}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%)`,
                  width: 300,
                  zIndex: -1,
                  opacity: 0.6,
                  transition: `all 0.35s ease-in-out`,
                  transitionDelay: `1s`,
                  "& img": {
                    width: "100%",
                    height: "auto",
                    transitionDelay: `1s !important`,
                    transition: `all 2s ease-in-out`,
                    transform: `scale(1)`,
                  },
                  "&.shown": {
                    transform: `translate(-50%, -50%)`,
                  },
                  "@media(max-width: 480px)": {
                    width: 172,
                  },
                }}
                className={className}
              >
                <img src="images/iphone.png" />
              </Box>
              <Box
                sx={{
                  height: "608px",
                  position: "relative",
                  transform: `rotate(90deg)`,
                  transition: `all 1s ease-in-out`,
                  "&.shown": {
                    transform: `rotate(0deg)`,
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                className={className}
              >
                <Box
                  sx={{
                    transform: "translateY(88px)",
                    transition: `all 1s ease`,
                    transitionDelay: `0s`,
                    width: 240,
                    height: 84,
                    "& img": {
                      width: "auto",
                      height: "100%",
                    },
                    "&.shown": {
                      transform: "translateY(0)",
                      height: 48,
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    m: theme.spacing(0, 0, 0.5, 0),
                  }}
                  className={className}
                >
                  <img src="logos/shorts-horizontal.png" />
                  <Box
                    sx={{
                      overflow: "hidden",
                      width: 0,
                      transition: `all 0.5s ease`,
                      transitionDelay: `0s`,
                      "&.shown": {
                        width: 38,
                      },
                    }}
                    className={className}
                  >
                    <Typography
                      sx={{
                        fontSize: 36,
                        lineHeight: "44px",
                        fontWeight: "900",
                        m: theme.spacing(0, 0, 0, 1),
                      }}
                    >
                      로
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    opacity: 0,
                    transition: `all 1s ease`,
                    transitionDelay: `0s`,
                    "&.shown": {
                      opacity: 1,
                    },
                  }}
                  className={className}
                >
                  <Typography
                    sx={{
                      fontSize: 40,
                      lineHeight: 1.2,
                      fontWeight: "900",
                    }}
                  >
                    광고의 역사를
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 56,
                        lineHeight: 1.2,
                        fontWeight: "900",
                        position: "relative",
                        m: theme.spacing(0, 1, 0, 0),
                        overflowX: "visible",
                        overflowY: "hidden",
                        "& *": {
                          transition: `all 1s ease`,
                        },
                        "& .none": {
                          opacity: 0,
                          color: "transparent !important",
                        },
                        "& .horizontal": {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          color: `#ffffff`,
                          transform: `translateY(0)`,
                          opacity: 1,
                          "&.shown": {
                            opacity: 0,
                            transform: `translateY(-100%)`,
                            transitionDelay: `2.5s`,
                          },
                        },
                        "& .vertical": {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          transform: `translateY(100%)`,
                          color: `transparent`,
                          WebkitTextStroke: `1px #ffffff`,
                          opacity: 0,
                          "&.shown": {
                            opacity: 1,
                            transform: `translateY(0)`,
                            transitionDelay: `2.5s`,
                          },
                        },
                      }}
                    >
                      <span className={`none`}>세로 </span>
                      <span className={`horizontal ${className}`}>새로 </span>
                      <span className={`vertical ${className}`}>세로</span>
                    </Typography>
                    <Typography
                      sx={{
                        display: "inline-block",
                        fontSize: 56,
                        lineHeight: 1.2,
                        fontWeight: "900",
                      }}
                    >
                      쓰다
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      sx={{
                        m: theme.spacing(2, 0, 0, 0),
                        fontSize: 16,
                        lineHeight: `24px`,
                        color: grey[400],
                        transform: `translateY(100%)`,
                        transition: `all 0.5s ease`,
                        opacity: 0,
                        "&.shown": {
                          opacity: 1,
                          transform: `translateY(0)`,
                          transitionDelay: `1s`,
                        },
                      }}
                      className={className}
                    >
                      최대 600%의 효율의 쇼츠 광고,
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      overflow: "hidden",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 16,
                        lineHeight: `24px`,
                        color: grey[400],
                        transform: `translateY(100%)`,
                        transition: `all 0.5s ease`,
                        opacity: 0,
                        "&.shown": {
                          opacity: 1,
                          transform: `translateY(0)`,
                          transitionDelay: `1.5s`,
                        },
                      }}
                      className={className}
                    >
                      No.1 유하에서 만나보세요.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              right: 0,
              bottom: 172,
              width: 240,
              transform: `translateX(-50%)`,
              "@media(max-width: 480px)": {
                bottom: 80,
                width: 240,
              },
            }}
          >
            <Button
              sx={{
                m: theme.spacing(3, 0, 0, 0),
                transition: `all 1s ease`,
                opacity: 0,
                transform: `scale(0.8)`,
                "&.shown": {
                  transitionDelay: `2s`,
                  opacity: 1,
                  transform: `scale(1)`,
                },
              }}
              className={className}
              onClick={onClickButton}
            >
              지금 바로 문의하기
            </Button>
          </Box>
        </Box>
      </Box>
      <MainNav />
      <Main />
    </>
  );
}

function Main() {
  const { ref, inView } = useInView()
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      {/* <Section01 /> */}
      <Section index={0}>
        <SectionInner responsive>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              No.1 유튜버 섭외 플랫폼
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: "900",
                textAlign: "center",
                // background: `radial-gradient(#eff1ff,black 80%)`,
                // backgroundPosition: `50% 75%`,
                // backgroundSize: `100% 200%`,
                // WebkitBackgroundClip: `text`,
                // WebkitTextFillColor: `transparent`,
              }}
            >
              유튜버 섭외 1위,
              <br />
              유하.
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "400",
                m: theme.spacing(2, 0, 0, 0),
                textAlign: "center",
                color: grey[400],
              }}
            >
              이미 수많은 광고주 회원들이
              <br />
              유하를 통해 유튜버를 섭외 중입니다.
            </Typography>
          </Box>
          <Box sx={{
            m: `64px auto 0 auto`,
            display: 'flex',
            justifyContent: 'center',
            maxWidth: 800,
            '& > *:not(:nth-child(1))': {
              ml: 2,
            },
            '@media(max-width: 480px)': {
              flexDirection: 'column',
              '& > *:not(:nth-child(1))': {
                ml: 0,
                mt: 2,
              },
            },
            p: theme.spacing(0, 2)
          }}>
            {infos.map((item, index) => {
              return <Box
                key={index}
                sx={{
                  p: theme.spacing(3),
                  backgroundColor: grey[900],
                  borderRadius: 2,
                  display: 'inline-flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                  '@media(max-width: 480px)': {
                    flex: 'initial',
                    width: '100%',
                    flexDirection: 'row',
                  },
                }}>
                <Icon
                  size={48}
                  name={item.icon} prefix={'fad'} color={youhaBlue[500]} />
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mt: 2,
                  '@media(max-width: 480px)': {
                    flex: 1,
                    mt: 0
                  },
                }}>
                  <Typography sx={{
                    fontSize: 14,
                    color: grey[500],
                  }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: 24,
                    fontWeight: '700'
                  }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            })}
          </Box>
        </SectionInner>
      </Section>
      <Section index={1}>
        <SectionInner
          responsive
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Box ref={ref}>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              크리에이터 견적 서비스
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: "900",
                textAlign: "center",
                // background: `radial-gradient(#eff1ff,black 80%)`,
                // backgroundPosition: `50% 75%`,
                // backgroundSize: `100% 200%`,
                // WebkitBackgroundClip: `text`,
                // WebkitTextFillColor: `transparent`,
              }}
            >
              믿고 맡길 수 있는
              <br />
              크리에이터 견적
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "400",
                m: theme.spacing(2, 0, 0, 0),
                textAlign: "center",
                color: grey[400],
              }}
            >
              정확하고, 안전하고, 원스톱으로<br />
              크리에이터 견적 서비스를 제공합니다.
            </Typography>
          </Box>
          <Box sx={{
            m: `64px auto 0 auto`,
            display: 'grid',
            gridTemplateColumns: `repeat(2, 1fr)`,
            justifyContent: 'center',
            maxWidth: 800,
            gridColumnGap: 16,
            gridRowGap: 16,
            // '@media(max-width: 480px)': {
            //   flexDirection: 'column',
            //   '& > *:not(:nth-child(1))': {
            //     ml: 0,
            //     mt: 2,
            //   },
            // },
            p: theme.spacing(0, 2),
            '@media(max-width: 480px)': {
              gridTemplateColumns: `repeat(1, 1fr)`,
            },
          }}>
            {services.map((item, index) => {
              return <Box
                key={index}
                sx={{
                  p: theme.spacing(3),
                  backgroundColor: grey[900],
                  borderRadius: 2,
                  display: 'inline-flex',
                  alignItems: 'flex-start',
                  width: '100%',
                  flexDirection: 'row',
                }}>
                <Icon
                  size={48}
                  name={item.icon} prefix={'fad'} color={youhaBlue[500]} />
                <Box sx={{
                  ml: 3,
                  '@media(max-width: 480px)': {
                    flex: 1,
                    mt: 0
                  },
                }}>
                  <Typography sx={{
                    fontSize: 16,
                    fontWeight: 700,
                  }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: 14,
                    color: grey[500],
                    mt: 0.5,
                  }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            })}
          </Box>
        </SectionInner>
        <SectionInner sx={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box ref={ref}>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              믿고 맡기는 견적서
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: "900",
                textAlign: "center",
                // background: `radial-gradient(#eff1ff,black 80%)`,
                // backgroundPosition: `50% 75%`,
                // backgroundSize: `100% 200%`,
                // WebkitBackgroundClip: `text`,
                // WebkitTextFillColor: `transparent`,
              }}
            >
              유하 인증 에이전시가
              <br />
              견적서를 제공합니다.
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "400",
                m: theme.spacing(2, 0, 0, 0),
                textAlign: "center",
                color: grey[400],
              }}
            >
              유하 인증 에이전시가<br />섭외 가능한 크리에이터의 단가와 일정,<br />브랜드와 핏이 맞는 이유까지 함께 제공해드립니다.
            </Typography>
          </Box>
          <Box sx={{
            flex: 1,
            position: 'relative',
            width: '100%',
          }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                mt: 8,
                justifyContent: 'center',
                '@media(max-width: 800px)': {
                  justifyContent: 'flex-start',
                },
                overflowX: 'scroll',
                overflowY: 'hidden',
                p: theme.spacing(0, 2),
                '& > img': {
                  transition: `all 1.5s ease`,
                  transform: 'translateY(100%)',
                  opacity: 0,
                  height: '100%',
                  width: 'auto',
                },
                '&.shown': {
                  '& > img': {
                    transform: 'translateY(-0%)',
                    opacity: 1,
                  },
                  '& > img:nth-child(0)': {
                    transitionDelay: '0s'
                  },
                  '& > img:nth-child(1)': {
                    transitionDelay: '0.5s'
                  },
                  '& > img:nth-child(2)': {
                    transitionDelay: '1s'
                  },
                }
              }}
              className={inView ? 'shown' : ''}>
              <img src='/images/Slide00.png' />
              <img src='/images/Slide01.png' />
              <img src='/images/Slide02.png' />
            </Box>
          </Box>
          <Typography sx={{
            fontSize: 12,
            color: grey[500],
            textAlign: 'center',
            mt: 4
          }}>
            평균 1주일 이내 5건 이상의 견적서를 받습니다.
          </Typography>
        </SectionInner>
        <SectionInner responsive>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              거래액, 고객사 1위
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: "900",
                textAlign: "center",
                // background: `radial-gradient(#eff1ff,black 80%)`,
                // backgroundPosition: `50% 75%`,
                // backgroundSize: `100% 200%`,
                // WebkitBackgroundClip: `text`,
                // WebkitTextFillColor: `transparent`,
              }}
            >
              국내 거래액 1위
              <br />
              고객사 30,000+
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "400",
                m: theme.spacing(2, 0, 0, 0),
                textAlign: "center",
                color: grey[400],
              }}
            >
              국내 유튜버 광고 No.1 서비스 유하,
              <br />
              30,000명의 고객사가 함께합니다.
            </Typography>
          </Box>
          <Box sx={{
            width: '100%',
            maxWidth: 800,
            m: `64px auto 0 auto`,
            '& > .mobile': {
              display: 'none',
            },
            '@media(max-width: 480px)': {
              p: '0 24px',
              '& > .web': {
                display: 'none',
              },
              '& > .mobile': {
                display: 'flex',
              }
            }
          }}>
            <img src="/images/2_web.png" className="web" />
            <img src="/images/2_mobile.png" className="mobile" />
          </Box>
        </SectionInner>
      </Section>
      <Section index={2}>
        <SectionInner responsive>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              실제 목소리
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: "900",
                textAlign: "center",
                // background: `radial-gradient(#eff1ff,black 80%)`,
                // backgroundPosition: `50% 75%`,
                // backgroundSize: `100% 200%`,
                // WebkitBackgroundClip: `text`,
                // WebkitTextFillColor: `transparent`,
              }}
            >
              쉽고 간편한
              <br />
              견적 신청.
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "400",
                m: theme.spacing(2, 0, 0, 0),
                textAlign: "center",
                color: grey[400],
              }}
            >
              수많은 기업과 개인 고객이<br />
              월 1,000 건 이상의
              <br />크리에이터 제안서를 받고 있습니다.
            </Typography>
          </Box>
          <Box sx={{
            overflow: 'hidden',
            mt: 8,
          }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'flex-start'
            }}>
              <Box sx={{
                display: 'inline-flex',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                position: 'relative',
                '&.original': {
                  animation: '40s linear infinite normal none running infiniteAnimation1',
                },
                '&.clone': {
                  animation: '40s linear infinite infiniteAnimation2',
                }
              }} className='original'>
                {reviews.map((item, index) => {
                  return <Box key={index} sx={{
                    p: theme.spacing(3),
                    backgroundColor: grey[900],
                    borderRadius: 2,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    mr: 2,
                    width: 240,
                  }}>
                    <Typography sx={{
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: grey[500],
                      mt: 0.5,
                      mb: 1,
                    }}>
                      {item.type}
                    </Typography>
                    <Rating defaultValue={5} readOnly />
                    <Typography sx={{
                      fontSize: 14,
                      color: grey[500],
                      mt: 2,
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                })}
                {reviews.map((item, index) => {
                  return <Box key={index} sx={{
                    p: theme.spacing(3),
                    backgroundColor: grey[900],
                    borderRadius: 2,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    mr: 2,
                    width: 240,
                  }}>
                    <Typography sx={{
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: grey[500],
                      mt: 0.5,
                      mb: 1,
                    }}>
                      {item.type}
                    </Typography>
                    <Rating defaultValue={5} readOnly />
                    <Typography sx={{
                      fontSize: 14,
                      color: grey[500],
                      mt: 2,
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                })}
              </Box>
              <Box sx={{
                display: 'inline-flex',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                position: 'relative',
                '&.original': {
                  animation: '40s linear infinite normal none running infiniteAnimation1',
                },
                '&.clone': {
                  animation: '40s linear infinite infiniteAnimation2',
                },
              }} className='clone'>
                {reviews.map((item, index) => {
                  return <Box key={index} sx={{
                    p: theme.spacing(3),
                    backgroundColor: grey[900],
                    borderRadius: 2,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    mr: 2,
                    width: 240,
                  }}>
                    <Typography sx={{
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: grey[500],
                      mt: 0.5,
                      mb: 1,
                    }}>
                      {item.type}
                    </Typography>
                    <Rating defaultValue={5} readOnly />
                    <Typography sx={{
                      fontSize: 14,
                      color: grey[500],
                      mt: 2,
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                })}
                {reviews.map((item, index) => {
                  return <Box key={index} sx={{
                    p: theme.spacing(3),
                    backgroundColor: grey[900],
                    borderRadius: 2,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    mr: 2,
                    width: 240,
                  }}>
                    <Typography sx={{
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: grey[500],
                      mt: 0.5,
                      mb: 1,
                    }}>
                      {item.type}
                    </Typography>
                    <Rating defaultValue={5} readOnly />
                    <Typography sx={{
                      fontSize: 14,
                      color: grey[500],
                      mt: 2,
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                })}
              </Box>
            </Box>
          </Box>
        </SectionInner>
      </Section>
      <Section index={3}>
        <SectionInner responsive>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography
              sx={{
                fontSize: 20,
                lineHeight: "40px",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              파트너 신청
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                lineHeight: "52px",
                fontWeight: "900",
                textAlign: "center",
                // background: `radial-gradient(#eff1ff,black 80%)`,
                // backgroundPosition: `50% 75%`,
                // backgroundSize: `100% 200%`,
                // WebkitBackgroundClip: `text`,
                // WebkitTextFillColor: `transparent`,
              }}
            >
              대행사신가요?
              <br />
              MCN이신가요?
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: "400",
                m: theme.spacing(2, 0, 0, 0),
                textAlign: "center",
                color: grey[400],
              }}
            >유하 인증 파트너에<br />신청하시고 광고건을 받아보세요.</Typography>
            <Button
              sx={{
                width: 'auto',
                m: theme.spacing(3, 0, 0, 0),
              }}
              onClick={() => { window.open('https://forms.gle/S5QRWhuTsgYLM67S7') }}
            >
              유하 인증 파트너 신청하기
            </Button>
          </Box>
        </SectionInner>
      </Section>
    </Box>
  );
}

export function Section({
  index,
  children,
}: {
  index: number;
  children?: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        p: theme.spacing(6, 0),
        "@media(max-width: 480px)": {
          p: theme.spacing(6, 0),
        },
      }}
      className={`Section Section${index}`}
    >
      {children}
    </Box>
  );
}

export function SectionInner({ responsive, children, sx }: { responsive?: boolean, children?: React.ReactNode, sx?: SxProps }) {
  return (
    <Box
      sx={{
        height: responsive ? 'auto' : 960,
        p: theme.spacing(6, 0),
        "@media(max-width: 480px)": {
          height: responsive ? 'auto' : 800,
          p: theme.spacing(4, 0),
        },
        ...sx
      }}
    >
      {children}
    </Box>
  );
}