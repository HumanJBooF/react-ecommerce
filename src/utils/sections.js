import cpus from '../assets/img/directory/cpus.jpg';
import gpus from '../assets/img/directory/gpus.jpg';
import motherboards from '../assets/img/directory/motherboards.jpg';
import ram from '../assets/img/directory/ram.jpg';
import ssd from '../assets/img/directory/ssd.png';

const sections = [
    {
        title: 'cpus',
        image: cpus,
        id: 1,
        linkUrl: 'shop/cpus'
    },
    {
        title: 'gpus',
        image: gpus,
        id: 2,
        linkUrl: 'shop/gpus'
    },
    {
        title: 'motherboards',
        image: motherboards,
        id: 3,
        linkUrl: 'shop/motherboards'
    },
    {
        title: 'ram',
        image: ram,
        size: 'large',
        id: 4,
        linkUrl: 'shop/ram'
    },
    {
        title: 'hdd/ssd/m.2',
        image: ssd,
        size: 'large',
        id: 5,
        linkUrl: 'shop/storage'
    }
];

export default sections;