import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika-k-r-пункт-погрузки', 'Unit | Model | i-i-s-logistika-k-r-пункт-погрузки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-logistika-k-r-докум-поставки',
    'model:i-i-s-logistika-k-r-докум-расп',
    'model:i-i-s-logistika-k-r-докум-рез-пост',
    'model:i-i-s-logistika-k-r-инф-о-заказе',
    'model:i-i-s-logistika-k-r-клиенты',
    'model:i-i-s-logistika-k-r-организация',
    'model:i-i-s-logistika-k-r-пункт-погрузки',
    'model:i-i-s-logistika-k-r-сотрудники',
    'model:i-i-s-logistika-k-r-список-барж',
    'model:i-i-s-logistika-k-r-список-контей',
    'model:i-i-s-logistika-k-r-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
