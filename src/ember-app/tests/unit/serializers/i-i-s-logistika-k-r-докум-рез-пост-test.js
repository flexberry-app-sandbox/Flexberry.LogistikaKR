import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika-k-r-докум-рез-пост', 'Unit | Serializer | i-i-s-logistika-k-r-докум-рез-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-logistika-k-r-докум-рез-пост',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-logistika-k-r-ед-изм',
    'transform:i-i-s-logistika-k-r-состоян-заказа',
    'transform:i-i-s-logistika-k-r-уд-кл',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
