import { Box, Rating, SxProps, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Container from "../components/atoms/Container";
import { mainColor, theme } from "../themes/theme";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { grey } from "@mui/material/colors";
import Button from "../components/atoms/Button";
import { BeltBanner } from "../components/organisms/BeltBanner";
import MainNav from "../components/organisms/MainNav";
import _ from "lodash";
// import Shorts from "../components/templates/index/shorts";
// import Section01 from "../components/templates/index/Section01";
// import Icon from "../components/atoms/Icon";
// import { IconName } from "@fortawesome/fontawesome-svg-core";
// import youhaBlue from "../constants/youhaBlue";
import Footer from "../components/templates/Footer";
import { Stack } from "@mui/system";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const infos: { icon: any, title: any, description: any }[] = [
  {
    icon: 'user-tie-hair',
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

const services: { icon: any, title: any, description: any }[] = [
  {
    icon: 'user-tie-hair',
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
          url={`videos/universe-03.mp4`}
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
    window.open(`https://forms.gle/an8Chn4kPMvo2uEC8`)
  };
  const webHeight = 640;
  const mobileHeight = 800;
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
          >
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
                  fontSize: 48,
                  lineHeight: 1.2,
                  fontWeight: "900",
                  textAlign: 'center',
                  '& span': {
                    color: mainColor[500]
                    // opacity: 0.6
                  }
                }}
              >
                <span>견적서 받고<br />고르면 끝<br /></span>
                원스탑 크리에이터<br />섭외 서비스
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              m: theme.spacing(6, 0, 0, 0),
              '@media(max-width: 480px)': {
                flexDirection: 'column-reverse',
                width: '100%',
              },
              transition: `all 1s ease`,
              opacity: 0,
              transform: `scale(0.8)`,
              "&.shown": {
                transitionDelay: `0.5s`,
                opacity: 1,
                transform: `scale(1)`,
              },
            }}
            className={className}
            >
              <Box sx={{
                '@media(max-width: 480px)': {
                  mt: 3,
                  mb: 6,
                  display:'flex',
                  flexDirection:'column-reverse',
                  width: '100%'
                }
              }}
              className={className}
              >
                <Typography sx={{
                  fontSize: 14,
                  color: grey[500],
                  mb: 1,
                  wordBreak: 'keep-all',
                  '@media(max-width: 480px)': {
                    textAlign:'center',
                    mb: 0,
                    mt: 1,
                    '& br': {
                      display: 'none',
                    }
                  }
                }}>
                  유하에서 내 브랜드에 맞는 크리에이터를 <br />추천받으세요.
                </Typography>
                <Button
                  sx={{
                    width: 'auto',
                    '@media(max-width: 480px)': {
                      width: '100%',
                    }
                  }}
                  className={className}
                  onClick={onClickButton}
                >
                  크리에이터 견적서 받기
                </Button>
              </Box>
              <Stack spacing={1} sx={{
                ml: 8,
                '@media(max-width: 480px)': {
                  ml: 0
                }
              }}>
                <Stack spacing={0.5} direction={'row'} alignItems={'center'}>
                  <Box sx={{
                    mr: 1, minWidth: 20, height: 20, borderRadius: '50%',
                    background: mainColor[500], display: 'flex', justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{
                      fontSize: 12,
                      fontWeight: 900
                    }}>1</Typography>
                  </Box>
                  <Typography sx={{

                  }}>
                    정확한 섭외 가격
                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction={'row'} alignItems={'center'}>
                  <Box sx={{
                    mr: 1, minWidth: 20, height: 20, borderRadius: '50%',
                    background: mainColor[500], display: 'flex', justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{
                      fontSize: 12,
                      fontWeight: 900
                    }}>2</Typography>
                  </Box>
                  <Typography sx={{

                  }}>
                    크리에이터 일정

                  </Typography>
                </Stack>
                <Stack spacing={0.5} direction={'row'} alignItems={'center'}>
                  <Box sx={{
                    mr: 1, minWidth: 20, height: 20, borderRadius: '50%',
                    background: mainColor[500], display: 'flex', justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Typography sx={{
                      fontSize: 12,
                      fontWeight: 900
                    }}>3</Typography>
                  </Box>
                  <Typography sx={{

                  }}>
                    내 브랜드와 핏이 맞는 이유까지 한번에
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Container>
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
                {/* <Icon
                  size={48}
                  name={item.icon} prefix={'fad'} color={youhaBlue[500]} /> */}
                <Box sx={{
                  '& svg': {
                    width: 'auto',
                    height: 44,
                    color: mainColor[500]
                  }
                }}>
                  {item.title === '광고주 회원' ? <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-tie-hair" className="svg-inline--fa fa-user-tie-hair fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M257.9 66.16C269.2 84.1 289.2 96 312 96H347.1C350.6 106.2 352 116.1 352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 120.1 96.57 114.1 97.65 107.4C104.5 110.4 112.1 112 120 112H176C210.6 112 240.1 93.66 257.9 66.16V66.16z"></path><path className="fa-primary" fill="currentColor" d="M97.66 107.4C107.5 46.48 160.3 0 224 0C283.6 0 333.8 40.79 347.1 96H312C289.2 96 269.2 84.09 257.9 66.16C240.1 93.66 210.6 112 176 112H120C112.1 112 104.5 110.3 97.66 107.4V107.4zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"></path></g></svg> :
                    item.title === '광고대행사 회원' ? <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-tie-hair-long" className="svg-inline--fa fa-user-tie-hair-long fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M312 96H320L320 160C320 213 277 256 224 256C170.1 256 128 213 128 160L128 112H176C210.6 112 240.1 93.66 257.9 66.16C269.2 84.1 289.2 96 312 96V96z"></path><path className="fa-primary" fill="currentColor" d="M70.63 272C58.13 272 48 261.9 48 249.4C48 243.4 50.38 237.6 54.63 233.4L58.51 229.5C82.51 205.5 96 172.9 96 138.1V128C96 57.31 153.3 0 224 0C294.6 0 351.8 57.1 352 127.6V128.4L352 128.6V138.1C352 172.9 365.5 205.5 389.5 229.5L393.4 233.4C397.6 237.6 400 243.4 400 249.4C400 261.9 389.9 272 377.4 272H70.63zM128 112V160C128 213 170.1 256 224 256C277 256 320 213 320 160L320 96H312C289.2 96 269.2 84.09 257.9 66.16C240.1 93.66 210.6 112 176 112H128zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"></path></g></svg> :
                      <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="money-bill" className="svg-inline--fa fa-money-bill fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M512 192V320C476.7 320 448 348.7 448 384H128C128 348.7 99.35 320 64 320V192C99.35 192 128 163.3 128 128H448C448 163.3 476.7 192 512 192zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"></path><path className="fa-primary" fill="currentColor" d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM448 128H128C128 163.3 99.35 192 64 192V320C99.35 320 128 348.7 128 384H448C448 348.7 476.7 320 512 320V192C476.7 192 448 163.3 448 128z"></path></g></svg>}
                </Box>
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
                <Box sx={{
                  minWidth: 48,
                  height: 48,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'visible',
                  '& svg': {
                    color: mainColor[500],
                    height: 44,
                    width: 'auto'
                  }
                }}>
                  {item.title === '유하 인증 에이전시' ? <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="user-tie-hair" className="svg-inline--fa fa-user-tie-hair fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M257.9 66.16C269.2 84.1 289.2 96 312 96H347.1C350.6 106.2 352 116.1 352 128C352 198.7 294.7 256 224 256C153.3 256 96 198.7 96 128C96 120.1 96.57 114.1 97.65 107.4C104.5 110.4 112.1 112 120 112H176C210.6 112 240.1 93.66 257.9 66.16V66.16z"></path><path className="fa-primary" fill="currentColor" d="M97.66 107.4C107.5 46.48 160.3 0 224 0C283.6 0 333.8 40.79 347.1 96H312C289.2 96 269.2 84.09 257.9 66.16C240.1 93.66 210.6 112 176 112H120C112.1 112 104.5 110.3 97.66 107.4V107.4zM209.1 359.2L176 304H272L238.9 359.2L272.2 483.1L311.7 321.9C388.9 333.9 448 400.7 448 481.3C448 498.2 434.2 512 417.3 512H30.72C13.75 512 0 498.2 0 481.3C0 400.7 59.09 333.9 136.3 321.9L175.8 483.1L209.1 359.2z"></path></g></svg> :
                    item.title === '정확한 단가와 일정' ? <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="calendar-days" className="svg-inline--fa fa-calendar-days fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM208 256C199.2 256 192 263.2 192 272V304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208zM320 304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336C327.2 256 320 263.2 320 272V304zM80 384C71.16 384 64 391.2 64 400V432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80zM192 432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208C199.2 384 192 391.2 192 400V432zM336 384C327.2 384 320 391.2 320 400V432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336z"></path><path className="fa-primary" fill="currentColor" d="M160 64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V192H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64z"></path></g></svg> :
                      item.title === '영상 업로드까지 안전하게' ? <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="cloud-arrow-up" className="svg-inline--fa fa-cloud-arrow-up fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM223 263C213.7 272.4 213.7 287.6 223 296.1C232.4 306.3 247.6 306.3 256.1 296.1L296 257.9V392C296 405.3 306.7 416 320 416C333.3 416 344 405.3 344 392V257.9L383 296.1C392.4 306.3 407.6 306.3 416.1 296.1C426.3 287.6 426.3 272.4 416.1 263L336.1 183C327.6 173.7 312.4 173.7 303 183L223 263z"></path><path className="fa-primary" fill="currentColor" d="M223 296.1C213.7 287.6 213.7 272.4 223 263L303 183C312.4 173.7 327.6 173.7 336.1 183L416.1 263C426.3 272.4 426.3 287.6 416.1 296.1C407.6 306.3 392.4 306.3 383 296.1L344 257.9V392C344 405.3 333.3 416 320 416C306.7 416 296 405.3 296 392V257.9L256.1 296.1C247.6 306.3 232.4 306.3 223 296.1V296.1z"></path></g></svg> :
                        <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="handshake" className="svg-inline--fa fa-handshake fa-2x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><g className="fa-duotone-group"><path className="fa-secondary" fill="currentColor" d="M480 128.2c-40.98-40.93-64.6-64.12-122.6-64.12c-10.49 0-19.93-.6141-30.2 8.566L217 163.6C196.8 180.7 194.2 210.1 211.4 231.2c9.5 11.21 23.03 16.99 36.67 16.99c10.94 0 21.95-3.716 30.97-11.33l39.57-33.46l165.3 135.3c4.361 3.536 7.123 8.173 9.078 13.04L544 351.1V128.4L480 128.2zM0 383.9l64 .0404c17.75 0 32-14.3 32-32.03V128.3L0 128.3V383.9zM48 320.1c8.75 0 16 7.124 16 15.99c0 8.735-7.25 15.99-16 15.99S32 344.8 32 336.1C32 327.2 39.25 320.1 48 320.1z"></path><path className="fa-primary" fill="currentColor" d="M318.6 203.4L279 236.8c-9.016 7.619-20.03 11.33-30.97 11.33c-13.64 0-27.17-5.777-36.67-16.99C194.2 210.1 196.8 180.7 217 163.6l110.3-90.9L280.9 64C223.6 64.37 168.8 87.48 128.2 127.9L96 128.3v223.6l50.25-.0904l90.5 81.82c27.5 22.35 67.75 18.1 90-9.246l18.12 15.24c15.88 12.98 39.38 10.48 52.38-5.371l31.38-38.6l5.374 4.498c13.75 10.99 33.88 8.991 45-4.748l9.538-11.78c11.08-13.69 8.985-33.83-4.694-44.93L318.6 203.4zM544 128.4v223.6c0 17.6 14.25 32.05 31.1 32.05L640 384V128.5L544 128.4zM592 352c-8.75 0-16-7.253-16-15.99c0-8.868 7.25-15.99 16-15.99s16 7.124 16 15.99C608 344.8 600.8 352 592 352z"></path></g></svg>}
                </Box>
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