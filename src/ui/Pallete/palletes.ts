export type SingleColorType = {
  type: string;
  mainColor: string;
  bgColor: string;
};

export type PalletesType = {
  normal: SingleColorType[];
  reversed: SingleColorType[];
};

export const palletes: PalletesType = {
  normal: [
    { type: 'type1', mainColor: '#000000', bgColor: '#FFFFFF' },
    { type: 'type2', mainColor: '#FF7A00', bgColor: '#FFFFFF' },
    { type: 'type3', mainColor: '#1212DE', bgColor: '#FFFFFF' },
    { type: 'type4', mainColor: '#4D5498', bgColor: '#E3DAD5' },
    { type: 'type5', mainColor: '#633A80', bgColor: '#E4D59E' },
    { type: 'type6', mainColor: '#0B5F77', bgColor: '#FFF6D8' },
    { type: 'type7', mainColor: '#000000', bgColor: '#E6FF51' },
    { type: 'type8', mainColor: '#B12228', bgColor: '#F1D567' },
    { type: 'type9', mainColor: '#5472A4', bgColor: '#FBBCC7' },
  ],
  reversed: [
    { type: 'type1', mainColor: '#FFFFFF', bgColor: '#000000' },
    { type: 'type2', mainColor: '#FFFFFF', bgColor: '#FF7A00' },
    { type: 'type3', mainColor: '#FFFFFF', bgColor: '#1212DE' },
    { type: 'type4', mainColor: '#E3DAD5', bgColor: '#4D5498' },
    { type: 'type5', mainColor: '#E4D59E', bgColor: '#633A80' },
    { type: 'type6', mainColor: '#FFF6D8', bgColor: '#0B5F77' },
    { type: 'type7', mainColor: '#E6FF51', bgColor: '#000000' },
    { type: 'type8', mainColor: '#F1D567', bgColor: '#B12228' },
    { type: 'type9', mainColor: '#FBBCC7', bgColor: '#5472A4' },
  ],
};
