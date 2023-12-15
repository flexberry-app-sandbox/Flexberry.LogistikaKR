import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-logistika-k-r-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-logistika-k-r-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-logistika-k-r-товары-l.title'),
              icon: 'file',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-logistika-k-r-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-организация-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-клиенты-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-клиенты-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-клиенты-l.title'),
              icon: 'file',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-сотрудники-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-сотрудники-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-сотрудники-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-список-барж-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-список-контей-l.title'),
              icon: 'tags',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-logistika-k-r-пункт-погрузки-l.title'),
              icon: 'building',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документация.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документация.title'),
            children: [{
              link: 'i-i-s-logistika-k-r-докум-поставки-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika-k-r-докум-поставки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika-k-r-докум-поставки-l.title'),
              icon: 'folder',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-докум-расп-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika-k-r-докум-расп-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika-k-r-докум-расп-l.title'),
              icon: 'building',
              children: null
            }, {
              link: 'i-i-s-logistika-k-r-докум-рез-пост-l',
              caption: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika-k-r-докум-рез-пост-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документация.i-i-s-logistika-k-r-докум-рез-пост-l.title'),
              icon: 'suitcase',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})