import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISLogistikaKRДокумПоставкиLForm from './forms/i-i-s-logistika-k-r-докум-поставки-l';
import IISLogistikaKRДокумРаспLForm from './forms/i-i-s-logistika-k-r-докум-расп-l';
import IISLogistikaKRДокумРезПостLForm from './forms/i-i-s-logistika-k-r-докум-рез-пост-l';
import IISLogistikaKRКлиентыLForm from './forms/i-i-s-logistika-k-r-клиенты-l';
import IISLogistikaKRОрганизацияLForm from './forms/i-i-s-logistika-k-r-организация-l';
import IISLogistikaKRПунктПогрузкиLForm from './forms/i-i-s-logistika-k-r-пункт-погрузки-l';
import IISLogistikaKRСотрудникиLForm from './forms/i-i-s-logistika-k-r-сотрудники-l';
import IISLogistikaKRСписокБаржLForm from './forms/i-i-s-logistika-k-r-список-барж-l';
import IISLogistikaKRСписокКонтейLForm from './forms/i-i-s-logistika-k-r-список-контей-l';
import IISLogistikaKRТоварыLForm from './forms/i-i-s-logistika-k-r-товары-l';
import IISLogistikaKRДокумПоставкиEForm from './forms/i-i-s-logistika-k-r-докум-поставки-e';
import IISLogistikaKRДокумРаспEForm from './forms/i-i-s-logistika-k-r-докум-расп-e';
import IISLogistikaKRДокумРезПостEForm from './forms/i-i-s-logistika-k-r-докум-рез-пост-e';
import IISLogistikaKRКлиентыEForm from './forms/i-i-s-logistika-k-r-клиенты-e';
import IISLogistikaKRОрганизацияEForm from './forms/i-i-s-logistika-k-r-организация-e';
import IISLogistikaKRПунктПогрузкиEForm from './forms/i-i-s-logistika-k-r-пункт-погрузки-e';
import IISLogistikaKRСотрудникиEForm from './forms/i-i-s-logistika-k-r-сотрудники-e';
import IISLogistikaKRСписокБаржEForm from './forms/i-i-s-logistika-k-r-список-барж-e';
import IISLogistikaKRСписокКонтейEForm from './forms/i-i-s-logistika-k-r-список-контей-e';
import IISLogistikaKRТоварыEForm from './forms/i-i-s-logistika-k-r-товары-e';
import IISLogistikaKRДокумПоставкиModel from './models/i-i-s-logistika-k-r-докум-поставки';
import IISLogistikaKRДокумРаспModel from './models/i-i-s-logistika-k-r-докум-расп';
import IISLogistikaKRДокумРезПостModel from './models/i-i-s-logistika-k-r-докум-рез-пост';
import IISLogistikaKRИнфОЗаказеModel from './models/i-i-s-logistika-k-r-инф-о-заказе';
import IISLogistikaKRКлиентыModel from './models/i-i-s-logistika-k-r-клиенты';
import IISLogistikaKRОрганизацияModel from './models/i-i-s-logistika-k-r-организация';
import IISLogistikaKRПунктПогрузкиModel from './models/i-i-s-logistika-k-r-пункт-погрузки';
import IISLogistikaKRСотрудникиModel from './models/i-i-s-logistika-k-r-сотрудники';
import IISLogistikaKRСписокБаржModel from './models/i-i-s-logistika-k-r-список-барж';
import IISLogistikaKRСписокКонтейModel from './models/i-i-s-logistika-k-r-список-контей';
import IISLogistikaKRТоварыModel from './models/i-i-s-logistika-k-r-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-logistika-k-r-докум-поставки': IISLogistikaKRДокумПоставкиModel,
    'i-i-s-logistika-k-r-докум-расп': IISLogistikaKRДокумРаспModel,
    'i-i-s-logistika-k-r-докум-рез-пост': IISLogistikaKRДокумРезПостModel,
    'i-i-s-logistika-k-r-инф-о-заказе': IISLogistikaKRИнфОЗаказеModel,
    'i-i-s-logistika-k-r-клиенты': IISLogistikaKRКлиентыModel,
    'i-i-s-logistika-k-r-организация': IISLogistikaKRОрганизацияModel,
    'i-i-s-logistika-k-r-пункт-погрузки': IISLogistikaKRПунктПогрузкиModel,
    'i-i-s-logistika-k-r-сотрудники': IISLogistikaKRСотрудникиModel,
    'i-i-s-logistika-k-r-список-барж': IISLogistikaKRСписокБаржModel,
    'i-i-s-logistika-k-r-список-контей': IISLogistikaKRСписокКонтейModel,
    'i-i-s-logistika-k-r-товары': IISLogistikaKRТоварыModel
  },

  'application-name': 'Логистика',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Логистика',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Логистика',
          title: 'Logistika KR'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-logistika-k-r-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
            'i-i-s-logistika-k-r-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-logistika-k-r-клиенты-l': {
              caption: 'Клиенты',
              title: 'Клиенты'
            },
            'i-i-s-logistika-k-r-сотрудники-l': {
              caption: 'Сотрудники',
              title: 'Сотрудники'
            },
            'i-i-s-logistika-k-r-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            },
            'i-i-s-logistika-k-r-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-logistika-k-r-пункт-погрузки-l': {
              caption: 'Пункт погрузки',
              title: 'Пункт погрузки'
            }
          },
          документация: {
            caption: 'Документация',
            title: 'Документация',
            'i-i-s-logistika-k-r-докум-поставки-l': {
              caption: 'Документ поставки',
              title: 'Докум поставки'
            },
            'i-i-s-logistika-k-r-докум-расп-l': {
              caption: 'Документ распределения по баржам',
              title: 'Докум расп'
            },
            'i-i-s-logistika-k-r-докум-рез-пост-l': {
              caption: 'Документ результатов поставки',
              title: 'Докум рез пост'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-logistika-k-r-докум-поставки-l': IISLogistikaKRДокумПоставкиLForm,
    'i-i-s-logistika-k-r-докум-расп-l': IISLogistikaKRДокумРаспLForm,
    'i-i-s-logistika-k-r-докум-рез-пост-l': IISLogistikaKRДокумРезПостLForm,
    'i-i-s-logistika-k-r-клиенты-l': IISLogistikaKRКлиентыLForm,
    'i-i-s-logistika-k-r-организация-l': IISLogistikaKRОрганизацияLForm,
    'i-i-s-logistika-k-r-пункт-погрузки-l': IISLogistikaKRПунктПогрузкиLForm,
    'i-i-s-logistika-k-r-сотрудники-l': IISLogistikaKRСотрудникиLForm,
    'i-i-s-logistika-k-r-список-барж-l': IISLogistikaKRСписокБаржLForm,
    'i-i-s-logistika-k-r-список-контей-l': IISLogistikaKRСписокКонтейLForm,
    'i-i-s-logistika-k-r-товары-l': IISLogistikaKRТоварыLForm,
    'i-i-s-logistika-k-r-докум-поставки-e': IISLogistikaKRДокумПоставкиEForm,
    'i-i-s-logistika-k-r-докум-расп-e': IISLogistikaKRДокумРаспEForm,
    'i-i-s-logistika-k-r-докум-рез-пост-e': IISLogistikaKRДокумРезПостEForm,
    'i-i-s-logistika-k-r-клиенты-e': IISLogistikaKRКлиентыEForm,
    'i-i-s-logistika-k-r-организация-e': IISLogistikaKRОрганизацияEForm,
    'i-i-s-logistika-k-r-пункт-погрузки-e': IISLogistikaKRПунктПогрузкиEForm,
    'i-i-s-logistika-k-r-сотрудники-e': IISLogistikaKRСотрудникиEForm,
    'i-i-s-logistika-k-r-список-барж-e': IISLogistikaKRСписокБаржEForm,
    'i-i-s-logistika-k-r-список-контей-e': IISLogistikaKRСписокКонтейEForm,
    'i-i-s-logistika-k-r-товары-e': IISLogistikaKRТоварыEForm
  },

});

export default translations;
