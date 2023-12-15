import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдИзмEnum from '../enums/i-i-s-logistika-k-r-ед-изм';

export default FlexberryEnum.extend({
  enum: ЕдИзмEnum,
  sourceType: 'IIS.LogistikaKR.ЕдИзм'
});
