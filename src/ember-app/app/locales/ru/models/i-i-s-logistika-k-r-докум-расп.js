export default {
  projections: {
    ДокумРаспE: {
      дата: {
        __caption__: 'Дата'
      },
      номерДокРаспр: {
        __caption__: 'Номер документа распределения'
      },
      докумПоставки: {
        __caption__: 'Номер документа поставки',
        номДокПостав: {
          __caption__: 'Номер документа распределения'
        },
        организация: {
          __caption__: '',
          наимОрганиз: {
            __caption__: 'Наименование организации'
          }
        },
        клиенты: {
          __caption__: '',
          заказчик: {
            __caption__: 'Заказчик'
          },
          телефон: {
            __caption__: 'Телефон'
          },
          адресПоставки: {
            __caption__: 'Адрес поставки'
          }
        }
      },
      сотрудники: {
        __caption__: 'Сотрудники',
        фИОСотруд: {
          __caption__: 'ФИО сотрудника'
        }
      },
      пунктПогрузки: {
        __caption__: 'Адрес поставки',
        адрес: {
          __caption__: 'Адрес поставки'
        }
      },
      списокБарж: {
        __caption__: 'Список барж',
        номерБаржи: {
          __caption__: ''
        }
      },
      списокКонтей: {
        __caption__: 'Номер контейнера',
        номерКонтей: {
          __caption__: 'Номер контейнера'
        }
      }
    },
    ДокумРаспL: {
      дата: {
        __caption__: 'Дата'
      },
      номерДокРаспр: {
        __caption__: 'Номер документа распределения по баржам'
      },
      докумПоставки: {
        __caption__: 'Номер документа поставки',
        номДокПостав: {
          __caption__: 'Номер документа поставки'
        }
      },
      сотрудники: {
        __caption__: 'ФИО сотрудника',
        фИОСотруд: {
          __caption__: 'ФИО сотрудника'
        }
      },
      пунктПогрузки: {
        __caption__: 'Адрес погрузки',
        адрес: {
          __caption__: 'Адрес погрузки'
        }
      },
      списокБарж: {
        __caption__: 'Номер баржи',
        номерБаржи: {
          __caption__: 'Номер баржи'
        }
      },
      списокКонтей: {
        __caption__: 'Номер контейнера',
        номерКонтей: {
          __caption__: 'Номер контейнера'
        }
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата'
    },
    номерДокРаспр: {
      __caption__: 'Номер документа распределения'
    },
    докумПоставки: {
      __caption__: 'Номер документа поставки'
    },
    пунктПогрузки: {
      __caption__: 'Адрес поставки'
    },
    сотрудники: {
      __caption__: 'Сотрудники'
    },
    списокБарж: {
      __caption__: 'Список барж'
    },
    списокКонтей: {
      __caption__: 'Номер контейнера'
    }
  }
};
