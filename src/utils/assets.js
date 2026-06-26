import wordmark from '../../assets/logo/strata-wordmark.png';
import environment01 from '../../assets/environment/E01_brutalist_hallway.png';
import environment02 from '../../assets/environment/E02_parking_garage.png';
import environment03 from '../../assets/environment/E03_industrial_warehouse.png';
import environment04 from '../../assets/environment/E04_concrete_rooftop.png';
import environment05 from '../../assets/environment/E05_steel_staircase.png';
import editorial01 from '../../assets/editorials/A01_concrete_wall.png';
import editorial02 from '../../assets/editorials/A02_green_fog.png';
import editorial03 from '../../assets/editorials/A03_grid_projection.png';
import editorial04 from '../../assets/editorials/A04_shadow_composition.png';
import productTee from '../../assets/products/P02_heavyweight_tee.png';
import productCargo from '../../assets/products/P03_utility_cargo.png';
import detailFabric from '../../assets/details/D01_fabric.png';
import detailStitching from '../../assets/details/D02_stitching.png';
import detailLabel from '../../assets/details/D03_label.png';
import detailHardware from '../../assets/details/D04_hardware.png';

export const assets = {
  wordmark,
  environments: [
    environment01,
    environment02,
    environment03,
    environment04,
    environment05,
  ],
  editorial: [editorial01, editorial02, editorial03, editorial04],
  products: [
    {
      name: 'Heavyweight Tee',
      image: productTee,
    },
    {
      name: 'Utility Cargo',
      image: productCargo,
    },
  ],
  details: [
    {
      name: 'Fabric',
      image: detailFabric,
    },
    {
      name: 'Stitching',
      image: detailStitching,
    },
    {
      name: 'Label',
      image: detailLabel,
    },
    {
      name: 'Hardware',
      image: detailHardware,
    },
  ],
};
