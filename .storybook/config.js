import {configure} from '@storybook/react';

function loadStores(){
    require('../src/stories/InputStory');
    require('../src/stories/NewCounterStory')
}

configure(loadStores, module);