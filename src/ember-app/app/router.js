import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-logistika-k-r-докум-поставки-l');
  this.route('i-i-s-logistika-k-r-докум-поставки-e',
  { path: 'i-i-s-logistika-k-r-докум-поставки-e/:id' });
  this.route('i-i-s-logistika-k-r-докум-поставки-e.new',
  { path: 'i-i-s-logistika-k-r-докум-поставки-e/new' });
  this.route('i-i-s-logistika-k-r-докум-расп-l');
  this.route('i-i-s-logistika-k-r-докум-расп-e',
  { path: 'i-i-s-logistika-k-r-докум-расп-e/:id' });
  this.route('i-i-s-logistika-k-r-докум-расп-e.new',
  { path: 'i-i-s-logistika-k-r-докум-расп-e/new' });
  this.route('i-i-s-logistika-k-r-докум-рез-пост-l');
  this.route('i-i-s-logistika-k-r-докум-рез-пост-e',
  { path: 'i-i-s-logistika-k-r-докум-рез-пост-e/:id' });
  this.route('i-i-s-logistika-k-r-докум-рез-пост-e.new',
  { path: 'i-i-s-logistika-k-r-докум-рез-пост-e/new' });
  this.route('i-i-s-logistika-k-r-клиенты-l');
  this.route('i-i-s-logistika-k-r-клиенты-e',
  { path: 'i-i-s-logistika-k-r-клиенты-e/:id' });
  this.route('i-i-s-logistika-k-r-клиенты-e.new',
  { path: 'i-i-s-logistika-k-r-клиенты-e/new' });
  this.route('i-i-s-logistika-k-r-организация-l');
  this.route('i-i-s-logistika-k-r-организация-e',
  { path: 'i-i-s-logistika-k-r-организация-e/:id' });
  this.route('i-i-s-logistika-k-r-организация-e.new',
  { path: 'i-i-s-logistika-k-r-организация-e/new' });
  this.route('i-i-s-logistika-k-r-пункт-погрузки-l');
  this.route('i-i-s-logistika-k-r-пункт-погрузки-e',
  { path: 'i-i-s-logistika-k-r-пункт-погрузки-e/:id' });
  this.route('i-i-s-logistika-k-r-пункт-погрузки-e.new',
  { path: 'i-i-s-logistika-k-r-пункт-погрузки-e/new' });
  this.route('i-i-s-logistika-k-r-сотрудники-l');
  this.route('i-i-s-logistika-k-r-сотрудники-e',
  { path: 'i-i-s-logistika-k-r-сотрудники-e/:id' });
  this.route('i-i-s-logistika-k-r-сотрудники-e.new',
  { path: 'i-i-s-logistika-k-r-сотрудники-e/new' });
  this.route('i-i-s-logistika-k-r-список-барж-l');
  this.route('i-i-s-logistika-k-r-список-барж-e',
  { path: 'i-i-s-logistika-k-r-список-барж-e/:id' });
  this.route('i-i-s-logistika-k-r-список-барж-e.new',
  { path: 'i-i-s-logistika-k-r-список-барж-e/new' });
  this.route('i-i-s-logistika-k-r-список-контей-l');
  this.route('i-i-s-logistika-k-r-список-контей-e',
  { path: 'i-i-s-logistika-k-r-список-контей-e/:id' });
  this.route('i-i-s-logistika-k-r-список-контей-e.new',
  { path: 'i-i-s-logistika-k-r-список-контей-e/new' });
  this.route('i-i-s-logistika-k-r-товары-l');
  this.route('i-i-s-logistika-k-r-товары-e',
  { path: 'i-i-s-logistika-k-r-товары-e/:id' });
  this.route('i-i-s-logistika-k-r-товары-e.new',
  { path: 'i-i-s-logistika-k-r-товары-e/new' });
});

export default Router;
