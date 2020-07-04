
import Vue from 'vue'

const descriptionFilter = value => {
  return descriptionValue(value);
};

function descriptionValue(input) {
    var str = input;


  const formattedDate = str.substring(0, 25) + '...';
  return formattedDate;
}

Vue.filter('description', descriptionFilter)



