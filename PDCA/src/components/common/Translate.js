import React from 'react';
import Router from 'react-router';
import AppStore from '../../stores/AppStore';

var Translate = {

  getWord: function(wordKey){
    var languageObject = require('json!../../../languages/en.json');        
    return languageObject[wordKey];
  }

};

export default Translate;