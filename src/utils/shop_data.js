// @cpus
import ninetyNine00k from '../assets/img/cpus/9900k.jpg';
import ninetySeven00k from '../assets/img/cpus/9700k.jpg';
import ninetySix00k from '../assets/img/cpus/9600k.jpg';
import eightyThreeFiftyk from '../assets/img/cpus/8350k.jpg';
import twentySeven00x from '../assets/img/cpus/2700x.jpg';
import thirtySix00 from '../assets/img/cpus/3600.jpg';
import threadripper from '../assets/img/cpus/threadripper.jpg';
import extreme from '../assets/img/cpus/extreme.jpg';
// @gpus
import founders_2080ti from '../assets/img/gpus/2080ti_founders.jpg';
import evga_2080ti from '../assets/img/gpus/evga_2080ti.jpg';
import asus_2070 from '../assets/img/gpus/asus_2070.jpg';
import msi_1060 from '../assets/img/gpus/msi_1060.jpg';
import msi_rx480 from '../assets/img/gpus/msi_rx480.jpg';
import asus_rx570 from '../assets/img/gpus/asus_rx570.jpg';
import gigabyte_vega_46 from '../assets/img/gpus/gigabyte_vega_64.jpg';
import strix_vega from '../assets/img/gpus/strix_vega.jpg';
// @motherboards 
import asus_atx from '../assets/img/motherboards/asus_atx.jpg';
import msi_x570 from '../assets/img/motherboards/msi_x570.jpg';
import msi_z390 from '../assets/img/motherboards/msi_z390.jpg';
import gigabyte_z390 from '../assets/img/motherboards/gigabyte_z390.jpg';
import asrock_z390 from '../assets/img/motherboards/asrock_z390.jpg';
// @ram
import corsair_2x8 from '../assets/img/ram/corsair_2x8.jpg';
import gskill_2x8 from '../assets/img/ram/gskill_2x8.jpg';
import hyperx_fury_2x4 from '../assets/img/ram/hyperx_fury_2x4.jpg';
import corsair_dominator from '../assets/img/ram/corsair_dominator.jpg';
import ripjaws from '../assets/img/ram/ripjaws.jpg';
// @storage
import evo860 from '../assets/img/storage/860evo.jpg';
import evo970 from '../assets/img/storage/970evo.jpg';
import westernDigital from '../assets/img/storage/western.jpg';
import pny120 from '../assets/img/storage/pny120.jpg';
import wd_m2 from '../assets/img/storage/wd_m.2.jpg';

const shopData = [
    {
        id: 1,
        title: 'CPUs',
        routeName: 'cpus',
        items: [
            {
                id: 1,
                name: 'Intel Core i9-9900k',
                imageUrl: ninetyNine00k,
                price: '479.99',
                description: 'Coffee Lake 8-Core, 16-Thread, 3.6 GHz (5.0 GHz Turbo) LGA 1151 (300 Series) 95W'
            },
            {
                id: 2,
                name: 'Intel Core i7-9700k',
                imageUrl: ninetySeven00k,
                price: '379.99',
                description: 'Coffee Lake 8-Core 3.6 GHz (4.9 GHz Turbo) LGA 1151 (300 Series) 95W'
            },
            {
                id: 3,
                name: 'Intel Core i5-9600K ',
                imageUrl: ninetySix00k,
                price: '254.99',
                description: 'Coffee Lake 6-Core 3.7 GHz (4.6 GHz Turbo) LGA 1151 (300 Series) 95W'
            },
            {
                id: 4,
                name: 'Intel Core i3-8350K',
                imageUrl: eightyThreeFiftyk,
                price: '193.36',
                description: 'Coffee Lake Quad-Core 4.0 GHz LGA 1151 (300 Series) 91W'
            },
            {
                id: 5,
                name: 'AMD RYZEN 7 2700X',
                imageUrl: twentySeven00x,
                price: '329.99',
                description: '8-Core 3.7 GHz (4.3 GHz Max Boost) Socket AM4 105W'
            },
            {
                id: 6,
                name: 'AMD RYZEN 5 3600',
                imageUrl: thirtySix00,
                price: '199.99',
                description: '6-Core 3.6 GHz (4.2 GHz Max Boost) Socket AM4 65W'
            },
            {
                id: 7,
                name: 'AMD 2nd Gen RYZEN Threadripper 2990WX',
                imageUrl: threadripper,
                price: '1,699.99',
                description: '32-Core, 64-Thread, 4.2 GHz Max Boost (3.0 GHz Base)'
            },
            {
                id: 8,
                name: 'Intel Core i9-9980XE',
                imageUrl: extreme,
                price: '1,999.99',
                description: 'Skylake X 18-Core 3.0 GHz (4.4 GHz Turbo) LGA 2066 165W'
            },
            {
                id: 9,
                name: 'Intel Core i9-9960X',
                imageUrl: '',
                price: '1,699.99',
                description: 'Skylake X 16-Core 3.1 GHz (4.4 GHz Turbo) LGA 2066 165W'
            }
        ]
    },
    {
        id: 2,
        title: 'GPUs',
        routeName: 'gpus',
        items: [
            {
                id: 10,
                name: 'Geforce RTX 2080ti Founders Edition 11GB',
                imageUrl: founders_2080ti,
                price: '1,348.00'
            },
            {
                id: 11,
                name: 'EVGA RTX 2080 Ti FTW3 Ultra Gaming 11GB',
                imageUrl: evga_2080ti,
                price: '1,499.99'
            },
            {
                id: 12,
                name: 'ASUS ROG STRIX GeForce RTX 2070 Overclocked 8GB',
                imageUrl: asus_2070,
                price: '559.99'
            },
            {
                id: 13,
                name: 'MSI GAMING GeForce RTX 2060 6GB',
                imageUrl: msi_1060,
                price: '389.99'
            },
            {
                id: 14,
                name: 'MSI GAMING Radeon RX 480 GDDR5 8GB',
                imageUrl: msi_rx480,
                price: '229.99'
            },
            {
                id: 15,
                name: 'ASUS ROG Strix Radeon RX 570 4GB Gaming OC Edition',
                imageUrl: asus_rx570,
                price: '279.99'
            },
            {
                id: 16,
                name: 'GIGABYTE Radeon RX Vega 64 6GB',
                imageUrl: gigabyte_vega_46,
                price: '399.99'
            },
            {
                id: 17,
                name: 'ASUS ROG Radeon RX Vega 64 STRIX-RXVEGA64-O8G-GAMING 8GB',
                imageUrl: strix_vega,
                price: '949.99'
            }
        ]
    },
    {
        id: 3,
        title: 'Motherboards',
        routeName: 'motherboards',
        items: [
            {
                id: 18,
                name: 'ASUS ROG Strix X570-E Gaming ATX Motherboard',
                imageUrl: asus_atx,
                price: '329.99',
                description: 'PCIe 4.0, Aura Sync RGB Lighting, 2.5Gbps and Intel Gigabit LAN, Wi-Fi 6 (802.11 ax), Dual M.2 with Heatsinks, SATA 6Gb/s and USB 3.2 Gen 2'
            },
            {
                id: 19,
                name: 'MSI PRESTIGE X570 CREATION',
                imageUrl: msi_x570,
                price: '499.99',
                description: 'AMD AM4 SATA 6Gb/s M.2 USB 3.2 Wi-Fi 6 Extended-ATX'
            },
            {
                id: 20,
                name: 'MSI MEG Z390 GODLIKE',
                imageUrl: msi_z390,
                price: '599.99',
                description: 'LGA 1151 (300 Series) Intel Z390 SATA 6Gb/s USB 3.1 Extended ATX Intel Motherboard'
            },
            {
                id: 21,
                name: 'GIGABYTE Z390 AORUS MASTER',
                imageUrl: gigabyte_z390,
                price: '289.99',
                description: 'LGA 1151 (300 Series) Intel Z390 SATA 6Gb/s ATX Intel Motherboard'
            },
            {
                id: 22,
                name: 'ASRock Z390 Phantom Gaming 9',
                imageUrl: asrock_z390,
                price: '268.99',
                description: 'LGA 1151 (300 Series) Intel Z390 SATA 6Gb/s ATX Intel Motherboard'
            }
        ]
    },
    {
        id: 4,
        title: 'RAM',
        routeName: 'ram',
        items: [
            {
                id: 23,
                name: 'CORSAIR Vengeance LPX 16GB (2 x 8GB) DDR4 3000MHz',
                imageUrl: corsair_2x8,
                price: '64.99'
            },
            {
                id: 24,
                name: 'G.Skill TridentZ RGB Series 16GB (2 x 8GB) DDR4 3600MHz',
                imageUrl: gskill_2x8,
                price: '159.99'
            },
            {
                id: 25,
                name: 'Kingston HyperX FURY 8GB Kit (2x4GB) DDR3 1600MHz',
                imageUrl: hyperx_fury_2x4,
                price: '46.99'
            },
            {
                id: 26,
                name: 'Corsair Dominator Platinum RGB 32GB (2x16GB) DDR4 3200 ',
                imageUrl: corsair_dominator,
                price: '224.99'
            },
            {
                id: 27,
                name: 'G.Skill 16GB (2 x 8GB) Ripjaws V Series DDR4 3200MHz',
                imageUrl: ripjaws,
                price: '88.89'
            }
        ]
    },
    {
        id: 5,
        title: 'Hdd/Ssd/m.2',
        routeName: 'storage',
        items: [
            {
                id: 28,
                name: 'Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD ',
                imageUrl: evo860,
                price: '199.99'
            },
            {
                id: 29,
                name: 'Samsung 970 EVO Plus Series - 500GB PCIe NVMe - M.2 Internal SSD',
                imageUrl: evo970,
                price: '129.99'
            },
            {
                id: 30,
                name: 'WD Black 6TB Performance Hard Drive - 7200 RPM, SATA 6 Gb/s, 256 MB Cache, 3.5"',
                imageUrl: westernDigital,
                price: '249.99'
            },
            {
                id: 31,
                name: 'PNY CS900 120GB 2.5” Sata III Internal Solid State Drive',
                imageUrl: pny120,
                price: '29.99'
            },
            {
                id: 32,
                name: 'WD Black SN750 1TB NVMe Internal Gaming SSD - Gen3 PCIe, M.2 2280, 3D NAND',
                imageUrl: wd_m2,
                price: '249.99'
            }
        ]
    }
];

export default shopData;