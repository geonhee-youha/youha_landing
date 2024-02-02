import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { theme } from "../themes/theme";
import Icon from "../components/atoms/Icon";
import youhaBlue from "../constants/youhaBlue";

export default function Index() {
  return (
    <>
      <Box
        sx={{
          background: "blue",
        }}
      >
        <Container
          sx={{
            maxWidth: 1400,
            backgroundColor: "red",
            height: 800,
          }}
        >
          <Typography
            sx={{
              fontSize: 56,
              fontWeight: 700,
              color: `#ffffff`,
            }}
          >
            견적서 받고 고르면 끝.
            <br />
            원스타 크리에이터 섭외 서비스
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          background: grey[100],
        }}
      >
        <Container
          sx={{
            maxWidth: 1000,
            p: theme.spacing(16, 0),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              m: "0 auto",
            }}
          >
            <Box
              sx={{
                backgroundColor: youhaBlue[200],
                bottom: `0px`,
                left: -8,
                right: -8,
                position: `absolute`,
                height: "40%",
                zIndex: 1,
              }}
            />
            <Typography
              sx={{
                position: "relative",
                width: "100%",
                fontSize: 40,
                fontWeight: 600,
                textAlign: "center",
                zIndex: 2,
              }}
            >
              유튜버 섭외 1위, 유하
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mt: 8,
              "& > *": {
                flex: 1,
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 24,
                }}
              >
                광고주 회원
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 48,
                  fontWeight: 700,
                }}
              >
                20,000명+
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 24,
                }}
              >
                광고대행사 회원
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 48,
                  fontWeight: 700,
                }}
              >
                15,000명
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 24,
                }}
              >
                크리에이터 섭외 예산
              </Typography>
              <Typography
                sx={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: 48,
                  fontWeight: 700,
                }}
              >
                월 300억
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: 14,
              color: grey[500],
              mt: 8,
            }}
          >
            2024년 2월 기준
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          background: "#ffffff",
        }}
      >
        <Container
          sx={{
            maxWidth: 1000,
            p: theme.spacing(16, 0),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              margin: `0 auto`,
              maxWidth: `880px`,
            }}
          >
            <Box
              sx={{
                boxSizing: `border-box`,
                display: `flex`,
                padding: `20px 50px`,
                width: `50%`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  mr: 2,
                  border: `2px solid ${youhaBlue[200]}`,
                  borderRadius: "50%",
                }}
              >
                <Icon
                  name="user-tie"
                  size={48}
                  color={youhaBlue[500]}
                  prefix="fad"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    wordBreak: `keep-all`,
                  }}
                >
                  유하 인증 에이전시
                </Typography>
                <Typography
                  sx={{
                    color: "#4a4a4a",
                    fontSize: `13px`,
                    fontWeight: `400`,
                    letterSpacing: `-.5px`,
                    lineHeight: 1.54,
                    marginTop: `4px`,
                    wordBreak: `keep-all`,
                  }}
                >
                  유하가 심사하고 인증한 크리에이터 에이전시, 소속사가 견적서를
                  보내드립니다.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                boxSizing: `border-box`,
                display: `flex`,
                padding: `20px 50px`,
                width: `50%`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  mr: 2,
                  border: `2px solid ${youhaBlue[200]}`,
                  borderRadius: "50%",
                }}
              >
                <Icon
                  name="calendar-alt"
                  size={48}
                  color={youhaBlue[500]}
                  prefix="fad"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    wordBreak: `keep-all`,
                  }}
                >
                  정확한 단가와 일정
                </Typography>
                <Typography
                  sx={{
                    color: "#4a4a4a",
                    fontSize: `13px`,
                    fontWeight: `400`,
                    letterSpacing: `-.5px`,
                    lineHeight: 1.54,
                    marginTop: `4px`,
                    wordBreak: `keep-all`,
                  }}
                >
                  유하 인증 에이전시가 섭외 가능한 크리에이터의 단가와 일정,
                  브랜드와 핏이 맞는 이유까지 함께 제공합니다.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                boxSizing: `border-box`,
                display: `flex`,
                padding: `20px 50px`,
                width: `50%`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  mr: 2,
                  border: `2px solid ${youhaBlue[200]}`,
                  borderRadius: "50%",
                }}
              >
                <Icon
                  name="cloud-arrow-up"
                  size={48}
                  color={youhaBlue[500]}
                  prefix="fad"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    wordBreak: `keep-all`,
                  }}
                >
                  영상 업로드까지 안전하게
                </Typography>
                <Typography
                  sx={{
                    color: "#4a4a4a",
                    fontSize: `13px`,
                    fontWeight: `400`,
                    letterSpacing: `-.5px`,
                    lineHeight: 1.54,
                    marginTop: `4px`,
                    wordBreak: `keep-all`,
                  }}
                >
                  영상 업로드까지 안전하게 유하를 통해 안전하게 비용을 집행하고,
                  인증 에이전시가 광고 계약부터 업로드 관리까지 꼼꼼하게
                  진행합니다.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                boxSizing: `border-box`,
                display: `flex`,
                padding: `20px 50px`,
                width: `50%`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  mr: 2,
                  border: `2px solid ${youhaBlue[200]}`,
                  borderRadius: "50%",
                }}
              >
                <Icon
                  name="handshake"
                  size={48}
                  color={youhaBlue[500]}
                  prefix="fad"
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    wordBreak: `keep-all`,
                  }}
                >
                  원스톱 크리에이터 섭외 서비스 유하
                </Typography>
                <Typography
                  sx={{
                    color: "#4a4a4a",
                    fontSize: `13px`,
                    fontWeight: `400`,
                    letterSpacing: `-.5px`,
                    lineHeight: 1.54,
                    marginTop: `4px`,
                    wordBreak: `keep-all`,
                  }}
                >
                  유튜버 데이터 1등 서비스 유하가 데이터만으로 해소하지 못했던
                  광고주의 불편함을 해결합니다.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          background: grey[100],
        }}
      >
        <Container
          sx={{
            maxWidth: 1000,
            p: theme.spacing(16, 0),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              m: "0 auto",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                width: "100%",
                fontSize: 40,
                fontWeight: 600,
                textAlign: "center",
                zIndex: 2,
              }}
            >
              유하 인증 에이전시들로부터
              <br />
              여러 개의 견적서를 받아보세요.
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                mt: 1,
              }}
            >
              유하 인증 에이전시가 섭외 가능한 크리에이터의 단가와 일정,
              <br />
              브랜드와 핏이 맞는 이유까지 함께 제공해드립니다.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              mt: 8,
            }}
          >
            <Box sx={{
              width:'100%',
              maxWidth: 640,
              m: `0 auto`
            }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                pt: `56.25%`,
                borderRadius: 2,
                overflow: "hidden",
                "& img": {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                },
              }}
            >
              <img src="/images/1.avif" />
            </Box>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: 14,
              color: grey[500],
              mt: 8,
            }}
          >
            평균 1주일 이내 5건 이상의 견적서를 받습니다.
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          position:'relative',
          background: grey[100],
        }}
      >
        <Box sx={{
          position:'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: ''
        }}/>
        <Container
          sx={{
            position:'relative',
            maxWidth: 1000,
            p: theme.spacing(16, 0),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          </Container>
          </Box>
    </>
  );
}

// <Box
// sx={{
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   borderRadius: 2,
//   background: "#ffffff",
//   // boxShadow: `4px 4px 32px 0px rgba(0, 0, 0, 0.16)`,
//   p: 2,
//   // backgroundColor: grey[200]
// }}
// >
// <Icon name="user" size={40} prefix="fad" color={youhaBlue[500]} />
// <Typography
//   sx={{
//     textAlign: "center",
//     fontSize: 14,
//     color: youhaBlue[500],
//     mt: 2,
//   }}
// >
//   광고주 회원
// </Typography>
// <Typography
//   sx={{
//     fontSize: 24,
//     fontWeight: 700,
//     color: youhaBlue[500],
//   }}
// >
//   20,000명+
// </Typography>
// </Box>
// <Box
// sx={{
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   borderRadius: 2,
//   background: "#ffffff",
//   // boxShadow: `4px 4px 32px 0px rgba(0, 0, 0, 0.16)`,
//   p: 2,
//   // backgroundColor: grey[200]
// }}
// >
// <Icon
//   name="users"
//   size={40}
//   prefix="fad"
//   color={youhaBlue[500]}
// />
// <Typography
//   sx={{
//     textAlign: "center",
//     fontSize: 14,
//     color: youhaBlue[500],
//     mt: 2,
//   }}
// >
//   광고대행사 회원
// </Typography>
// <Typography
//   sx={{
//     fontSize: 24,
//     fontWeight: 700,
//     color: youhaBlue[500],
//   }}
// >
//   15,000명
// </Typography>
// </Box>
// <Box
// sx={{
//   flex: 1,
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   borderRadius: 2,
//   background: "#ffffff",
//   // boxShadow: `4px 4px 32px 0px rgba(0, 0, 0, 0.16)`,
//   p: 2,
//   // backgroundColor: grey[200]
// }}
// >
// <Icon
//   name="money-bill"
//   size={40}
//   prefix="fad"
//   color={youhaBlue[500]}
// />
// <Typography
//   sx={{
//     textAlign: "center",
//     fontSize: 14,
//     color: youhaBlue[500],
//     mt: 2,
//   }}
// >
//   크리에이터 섭외 예산
// </Typography>
// <Typography
//   sx={{
//     fontSize: 24,
//     fontWeight: 700,
//     color: youhaBlue[500],
//   }}
// >
//   월 300억
// </Typography>
// </Box>
