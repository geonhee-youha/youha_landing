import { Box, ButtonBase, Container, Stack, Typography } from "@mui/material";
import Visual from "../components/atoms/Visual";
import { theme } from "../themes/theme";
import Link from "next/link";
import youhaBlue from "../constants/youhaBlue";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Index() {
  const [ready, setReady] = useState<boolean>(false);
  const onVideoReady = () => {
    setReady(true);
  };
  return <>
    <Box sx={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#ffffff'
    }}>
      <Container sx={{
        position: 'relative',
        height: 800,
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{
          p: theme.spacing(3, 0),
          display: 'flex',
        }}>
          <Box
            sx={{
              flex: 1,
              m: theme.spacing(0, 3, 0, 0),
              "& img": {
                width: "auto",
                height: 24,
                cursor: "pointer",
              },
            }}
          >
            <Link href="/" passHref>
              <img src="/logos/README.png" />
            </Link>
          </Box>
          <Typography sx={{
            color: '#000000',
            '& b': {
              fontWeight: '700'
            }
          }}>
            Select the creator effortlessly through <b>youha</b>
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
        }}>
          <Typography sx={{
            fontSize: 56,
            lineHeight: '64px',
            fontWeight: '700',
            color: '#000000'
          }}>
            내 브랜드에 어울리는 <br />
            크리에이터를 쉽게 섭외하는 방법!
          </Typography>
          <Box sx={{
            display: 'flex',
            mt: 6,
            '& > div:not(:nth-child(1))': {
              m: theme.spacing(0, 0, 0, 3)
            }
          }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%', position: 'relative', height: 0, pt: '56.25%',
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Visual src='/images/00.jpeg' absolute
                  coverBgColor="rgba(0, 0, 0, 0.1)"
                />
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%', position: 'relative', height: 0, pt: '56.25%', borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Visual src='/images/01.jpeg' absolute coverBgColor="rgba(0, 0, 0, 0.1)" />
              </Box>
            </Box>
          </Box>
          <ButtonBase
            sx={{
              m: theme.spacing(6, 0, 0, 'auto'),
              backgroundColor: youhaBlue[500],
              color: '#ffffff',
              fontSize: 20,
              fontWeight: '700',
              height: 56,
              alignItems: 'center',
              p: theme.spacing(0, 3),
              borderRadius: 48,
              boxShadow: '4px 4px 8px 0px rgb(0 0 0 / 40%)'
            }}>
            크리에이터 리스트 신청하기
          </ButtonBase>
        </Box>
      </Container>
    </Box>
    <Box sx={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#000000'
    }}>
      <Container sx={{
        position: 'relative',
        height: 800,
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{
          p: theme.spacing(3, 0),
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Typography sx={{
            color: '#ffffff',
            '& b': {
              fontWeight: '700'
            }
          }}>
            Simply complete one application form and tell us all your preferences
          </Typography>
        </Box>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <Typography sx={{
            fontSize: 56,
            lineHeight: '64px',
            fontWeight: '700',
            color: '#ffffff'
          }}>
            크리에이터 리스트 신청서 하나로 끝!
          </Typography>
          <Typography sx={{
            mt: 4,
            fontSize: 20,
            lineHeight: '28px',
            // fontWeight: '700',
            color: '#ffffff'
          }}>
            브랜드와 제품 소개, 타겟 고객, 예산, 온에어 일정,<br />
            그 밖에 원하시는 사항을 신청서에 작성만 해주세요.
          </Typography>
          <Box sx={{
            display: 'flex',
            mt: 8,
            '& > div:not(:nth-child(1))': {
              m: theme.spacing(0, 0, 0, 6)
            }
          }}>
            <Box sx={{ flex: 1 }}>
              <img
                src='/images/2-00.png'
                style={{
                  width: 'auto',
                  height: '80px',
                }}
              />
              <Typography sx={{
                mt: 2,
                fontSize: 16,
                fontWeight: '700'
              }}>
                업계 1위 두유 브랜드 A
              </Typography>
              <Typography sx={{
                mt: 1,
                fontSize: 16,
              }}>
                단백질 음료지만 헬스, 벌크업과 같은 키워드가 부각되기 보다 전 국민의 필수 영양소를 채워주는 일상과 함께하는 음료 이미지를 강조하고 싶어요. 일상에서 단백질 첨가 제품을 습관적으로 섭취하는 제품으로 타겟 고객은 10대부터 30대 입니다.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src='/images/2-01.png'
                style={{
                  width: 'auto',
                  height: '80px',
                }}
              />
              <Typography sx={{
                mt: 2,
                fontSize: 16,
                fontWeight: '700'
              }}>
                절세 솔루션 제공 세무법인 B
              </Typography>
              <Typography sx={{
                mt: 1,
                fontSize: 16,
              }}>
                세금 환급 프로모션을 진행하는 건으로 크리에이터 리스트를 신청했지만, 사실 사업자 고객을 유치하는 목적으로 프로모션을 진행하려고 합니다. 카테고리는 중요하지 않아요. 대표나 경영진이 많이 보는 채널의 크리에이터가 필요해요.
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <img
                src='/images/2-02.png'
                style={{
                  width: 'auto',
                  height: '80px',
                }}
              />
              <Typography sx={{
                mt: 2,
                fontSize: 16,
                fontWeight: '700'
              }}>
                업계 1위 비타민 브랜드 C
              </Typography>
              <Typography sx={{
                mt: 1,
                fontSize: 16,
              }}>
                프리미엄 이미지를 가진 크리에이터가 필요해요. 본인 분야에서 최고로 인정받은 전문가, 명품 브랜드 협업 진행 이력이 있는 분이면 좋겠어요. 아무리 파급력이 좋아도 프리미엄 이미지가 없다면 협업이 어렵습니다.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    <Box sx={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#000000',
      p: theme.spacing(10, 0),
      height: 800,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Container sx={{
        position: 'relative',
        maxWidth: 1000,
        display: 'flex',
        height: 480
      }}>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          m: theme.spacing(0, 8, 0, 0)
        }}>
          <Typography sx={{
            fontSize: 40,
            lineHeight: '48px',
            fontWeight: '700',
            color: '#ffffff'
          }}>
            youha 인증 에이전시들이 광고주를 위한<br />
            최적화 크리에이터 리스트를 제공해드립니다.
          </Typography>
          <Typography sx={{
            mt: 'auto',
            fontSize: 16,
            lineHeight: '24px',
            // fontWeight: '700',
            color: '#ffffff'
          }}>
            Since 2019, YOUHA has evolved into a hub where stakeholders in Influencer Marketing gather by providing YouTube channel data to advertisers. Recognizing the challenges advertisers face in content marketing campaigns, we offer innovative solutions based on our network and insights.
          </Typography>
        </Box>
        <img src='/images/3-00.png'
          style={{
            width: 'auto',
            height: '100%',
          }}
        />
      </Container>
    </Box>
    <Box sx={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#ffffff',
      '& video': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }
    }}>
      <Container sx={{
        position: 'relative',
        height: 800,
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
        }}>
          <Box sx={{
            display: 'flex',
            mb: 6,
            '& > div:not(:nth-child(1))': {
              m: theme.spacing(0, 0, 0, 3)
            }
          }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%', position: 'relative', height: 0, pt: `${16 / 9 * 100}%`,
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <ReactPlayer
                    url={`videos/00.mp4`}
                    autoPlay
                    playing
                    muted
                    loop
                    playsinline
                    onReady={onVideoReady}
                    controls
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%', position: 'relative', height: 0, pt: `${16 / 9 * 100}%`,
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <ReactPlayer
                    url={`videos/01.mp4`}
                    autoPlay
                    playing
                    muted
                    loop
                    playsinline
                    onReady={onVideoReady}
                    controls
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%', position: 'relative', height: 0, pt: `${16 / 9 * 100}%`,
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <ReactPlayer
                    url={`videos/02.mp4`}
                    autoPlay
                    playing
                    muted
                    loop
                    playsinline
                    onReady={onVideoReady}
                    controls
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Box sx={{
                width: '100%', position: 'relative', height: 0, pt: `${16 / 9 * 100}%`,
                borderRadius: 2,
                overflow: 'hidden'
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}>
                  <ReactPlayer
                    url={`videos/03.mp4`}
                    autoPlay
                    playing
                    muted
                    loop
                    playsinline
                    onReady={onVideoReady}
                    controls
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Typography sx={{
            fontSize: 48,
            lineHeight: '56px',
            fontWeight: '700',
            color: '#000000'
          }}>
            원하는 크리에이터를 결정만 하세요!<br />
            브랜드 성공의 시작입니다.
          </Typography>
          <ButtonBase
            sx={{
              m: theme.spacing(6, 0, 0, 'auto'),
              backgroundColor: '#000000',
              color: '#ffffff',
              fontSize: 20,
              fontWeight: '700',
              height: 56,
              alignItems: 'center',
              p: theme.spacing(0, 3),
              borderRadius: 48,
              boxShadow: '4px 4px 8px 0px rgb(0 0 0 / 40%)'
            }}>
            크리에이터 리스트 신청하기
          </ButtonBase>
        </Box>
      </Container>
    </Box>
    <Box sx={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#000000'
    }}>
      <Container sx={{
        position: 'relative',
        height: 800,
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Typography sx={{
            fontSize: 56,
            lineHeight: '64px',
            fontWeight: '700',
            color: '#ffffff'
          }}>
            Our Network
          </Typography>
          <Box sx={{
            display: 'flex',
            mt: 8,
            '& > div:not(:nth-child(1))': {
              m: theme.spacing(0, 0, 0, 6)
            }
          }}>
            <img
              src='/images/5-00.png'
              style={{
                width: 800,
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
    <Box sx={{
      position: 'relative',
      width: '100%',
      backgroundColor: '#000000',
      p: theme.spacing(10, 0)
    }}>
      <Container sx={{
        position: 'relative',
        maxWidth: 1000,
        display: 'flex',
      }}
      >
        <Box sx={{
          flex: 1,
          display: 'flex',
          alignItems:'center'
        }}>
          <img src='/images/6-00.png' style={{
            width: 120,
            height: 120,
            borderRadius: 120,
          }} />
          <Box sx={{
            ml: 4,
          }}>
            <Typography sx={{
              fontSize: 20,
            }}>
              For Advertiser
            </Typography>
            <ButtonBase
              sx={{
                m: theme.spacing(4, 0, 0, 0),
                backgroundColor: '#ffffff',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '700',
                height: 48,
                alignItems: 'center',
                p: theme.spacing(0, 2),
                borderRadius: 48,
              }}>
              크리에이터 리스트 신청하기
            </ButtonBase>
          </Box>
        </Box>
        <Box sx={{
          flex: 1,
          display: 'flex',
          alignItems:'center'
        }}>
          <img src='/images/6-01.png' style={{
            width: 120,
            height: 120,
            borderRadius: 120,
          }} />
          <Box sx={{
            ml: 4,
          }}>
            <Typography sx={{
              fontSize: 20,
            }}>
              For Agency
            </Typography>
            <ButtonBase
              sx={{
                m: theme.spacing(4, 0, 0, 0),
                backgroundColor: '#ffffff',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: '700',
                height: 48,
                alignItems: 'center',
                p: theme.spacing(0, 2),
                borderRadius: 48,
              }}>
              youha 인증 에이전시 신청하기
            </ButtonBase>
          </Box>
        </Box>
      </Container>
    </Box>
  </>
}