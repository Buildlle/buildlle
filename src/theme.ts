import { background, color, extendTheme } from '@chakra-ui/react'

export default extendTheme({
  fonts: {
    body: "-apple-system, Inter, BlinkMacSystemFont, 'Segoe UI'",
    heading: "-apple-system, Inter, BlinkMacSystemFont, 'Segoe UI'",
    fontDisplay: 'optional',
    webkitFontSmoothing: 'antialiased'
  },

  styles: {
    global: {
      body: {
        background: '#fff',
        color: '#141415'
      },
      button: {
        _focus: {
          boxShadow: 'none !important'
        }
      }
    }
  },

  colors: {
    red: {
      100: '#E65969',
      200: '#EC838F',
      300: '#F6C5CB'
    },
    blue: {
      100: '#091AE6',
      200: '#626EF9',
      300: '#BFC4FD'
    },
    yellow: {
      100: '#E69F00',
      200: '#FFCD5C',
      300: '#FFEBBD'
    },
    grey: {
      100: '#EAEDF1',
      200: '#F2F5F8',
      300: '#FAFAFA'
    },
    black: {
      100: '#141415'
    },
    grad: {
      100: 'linear-gradient(220.48deg, #E69F00 -3.71%, #E65969 20.72%, #E609E1 43.48%, #AA0EE2 67.39%, #091AE6 105.56%)',
      200: 'linear-gradient(220.48deg, rgba(230, 159, 0, 0.68) -3.71%, rgba(230, 89, 105, 0.68) 20.72%, rgba(230, 9, 225, 0.68) 43.48%, rgba(170, 14, 226, 0.68) 67.39%, rgba(9, 26, 230, 0.68) 105.56%)',
      300: 'linear-gradient(220.48deg, rgba(230, 159, 0, 0.12) -3.71%, rgba(230, 89, 105, 0.12) 20.72%, rgba(230, 9, 225, 0.12) 43.48%, rgba(170, 14, 226, 0.12) 67.39%, rgba(9, 26, 230, 0.12) 105.56%)'
    },
    link: {
      100: '#1A0EAB'
    }
  },

  components: {
    Text: {
      baseStyle: {
        color: 'black.100',
        opacity: '87%',
        fontWeight: 400
      }
    },

    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none'
        },
        _focus: {
          boxShadow: 'none !important'
        }
      }
    },

    Button: {
      //   sizes: {
      //     lg: {
      //       h: 16
      //     }
      //   },

      variants: {
        primary: {
          backgroundColor: 'blue.100',
          color: '#FFF',
          rounded: '50px'
        },

        secondary: {
          backgroundColor: 'black.100',
          rounded: 'full',
          color: '#FFF',
          _hover: {
            backgroundColor: 'black.100'
          }
        },

        'secondary-outline': {
          border: '1px solid #141415',
          backgroundColor: 'transparent',
          rounded: 'full',
          _focus: {
            border: '1px solid #141415'
          }
        },

        accent: {
          backgroundColor: 'grey.300',
          rounded: '12px',
          color: 'black.100',
          _hover: {
            backgroundColor: 'grey.300'
          }
        },

        google: {
          backgroundColor: '#FFF',
          color: 'rgba(0, 0, 0, 0.54)',
          width: 'full',
          height: '54px',
          rounded: '10px',
          fontSize: '18px',
          fontWeight: '500',
          boxShadow:
            '0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168)',
          _hover: {
            bgColor: '#FFF',
            color: 'rgba(0, 0, 0, 0.54)'
          },
          _focus: {
            bgColor: '#FFF',
            color: 'rgba(0, 0, 0, 0.54)',
            boxShadow:
              '0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168) !important'
          }
        },

        apple: {
          backgroundColor: '#000000',
          color: '#FFFFFF',
          width: 'full',
          height: '54px',
          rounded: '10px',
          fontSize: '18px',
          fontWeight: '500'
        }
      }
    },

    Modal: {
      baseStyle: {
        dialog: {
          mx: 5,
          backdropFilter: 'blur(22px)'
        },
        header: {
          // borderBottom: '1px solid rgb(0 0 0 / 24%)'
        }
      }
    },

    Input: {
      //   sizes: {
      //     lg: {
      //       field: {
      //         fontWeight: 700,
      //         fontSize: '2xl',
      //         py: 6
      //       }
      //     }
      //   },

      variants: {
        outline: {
          field: {
            rounded: '13px',
            border: '1px solid',
            borderColor: 'grey.100',
            color: 'black.100',

            _hover: {
              borderColor: '#ECF0F4'
            },

            _placeholder: {
              color: 'black.100'
            },

            _focus: {
              borderColor: 'blue.300',
              boxShadow: 'none'
            }
          }
        }

        // solid: {
        //   field: {
        //     rounded: '0px',
        //     backgroundColor: 'rgba(255, 255, 255, 3%)',
        //     borderTop: '1px solid',
        //     borderColor: 'rgba(255, 255, 255, 8%)',

        //     _hover: {
        //       backgroundColor: 'rgba(255, 255, 255, 4%)'
        //     },

        //     _placeholder: {
        //       color: 'rgba(255, 255, 255, 48%)'
        //     }
        //   }
        // },

        // flushed: {
        //   field: {
        //     borderBottom: '1px solid rgb(0 0 0 / 24%)',

        //     _hover: {
        //       borderColor: 'rgb(0 0 0 / 60%)'
        //     },

        //     _placeholder: {
        //       color: 'rgb(0 0 0 / 12%)'
        //     },

        //     _focus: {
        //       borderColor: 'rgb(0 0 0 / 60%)',
        //       outline: 'none',
        //       boxShadow: 'none'
        //     }
        //   }
        // }
      }
    },

    SelectMenu: {
      baseStyle: {
        w: '100%',
        cursor: 'pointer'
      },

      sizes: {
        md: {
          fontWeight: 600,
          fontSize: 'md'
        },

        lg: {
          fontWeight: 700,
          fontSize: '2xl'
        }
      },

      variants: {
        outline: {
          rounded: '0px',
          border: '1px solid',
          borderColor: 'rgb(0 0 0 / 12%)',
          color: 'black',
          py: 2,
          px: 4,

          _hover: {
            borderColor: 'rgb(0 0 0 / 60%)'
          }
        },

        flushed: {
          borderBottom: '1px solid rgb(0 0 0 / 24%)',
          pt: 3,
          pb: 2,

          _hover: {
            borderColor: 'rgb(0 0 0 / 60%)'
          }
        }
      }
    },

    FormLabel: {
      variants: {
        outlined: {
          textTransform: 'uppercase',
          fontSize: 'xs',
          fontWeight: '600',
          color: 'rgb(0 0 0 / 72%)'
        },

        flushed: {}
      },

      defaultProps: {
        variant: 'outlined'
      }
    },

    Tabs: {
      variants: {
        line: {
          tablist: {
            borderBottom: '1px solid',
            borderColor: 'rgba(0, 0, 0, 0.24)'
          },

          tab: {
            color: 'rgb(0 0 0 / 48%)',
            borderBottom: '1px solid',
            borderColor: 'transparent',

            _selected: {
              color: 'rgb(0 0 0 / 72%)',
              fontWeight: '600'
            },
            _active: {
              bg: 'transparent'
            },
            _focus: {
              boxShadow: 'none'
            }
          }
        }
      }
    },

    Textarea: {
      variants: {
        outline: {
          rounded: '0px',
          border: '1px solid',
          borderColor: 'rgb(0 0 0 / 26%)',
          color: 'black',

          _hover: {
            borderColor: 'rgb(0 0 0 / 60%)'
          },

          _placeholder: {
            color: 'rgb(0 0 0 / 36%)'
          },

          _focus: {
            borderColor: 'rgb(0 0 0 / 60%)',
            outline: 'none',
            boxShadow: 'none'
          }
        }
      }
    },

    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: '#212121',
            borderColor: '#212121',

            _hover: {
              bg: '#212121',
              borderColor: '#212121'
            }
          }
        },
        label: {
          fontWeight: '500',
          ml: 4
        }
      },

      md: {
        label: { fontSize: 'sm' }
      },

      lg: {
        label: { fontSize: 'md' }
      }
    },

    Radio: {
      baseStyle: {
        control: {
          _checked: {
            bg: '#000000',
            borderColor: '#000000',

            _hover: {
              bg: '#000000',
              borderColor: '#000000'
            }
          }
        },
        label: {
          fontWeight: '500',
          ml: 4
        }
      },

      md: {
        label: { fontSize: 'sm' }
      },

      lg: {
        label: { fontSize: 'md' }
      }
    }
  }
})
