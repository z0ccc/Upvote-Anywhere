/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';

import './App.css';

const setClickOnly = () => {
  chrome.storage.sync.get('clickOnly', ({ clickOnly }) => {
    const value = !clickOnly;
    chrome.storage.sync.set({ clickOnly: value });
    if (value === true) {
      chrome.action.setIcon({
        path: {
          16: '../images/reddit_16.png',
        },
      });
    }
  });
};

const OptionsPage = () => {
  return (
    <div>
      <div className="optionItemWrap">
        <select className="selectBoxWrap" name="theme" id="theme">
          <option value="default">Default</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
        <label htmlFor="theme">Extension theme</label>
      </div>
      <div className="optionItemWrap">
        <input
          type="checkbox"
          id="clickOnly"
          name="clickOnly"
          onChange={setClickOnly}
        />
        <label htmlFor="clickOnly">
          Run browser popup only when icon is clicked
        </label>
      </div>
      <div className="optionItemWrap">
        <input type="checkbox" id="ytDefault" name="ytDefault" />
        <label htmlFor="ytDefault">Show YouTube comments as default</label>
      </div>
      <div className="optionText">
        Github:{' '}
        <a
          target="_blank"
          href="https://github.com/z0ccc/Reddit-Wherever"
          rel="noreferrer"
        >
          https://github.com/z0ccc/Reddit-Wherever
        </a>
      </div>
    </div>
  );
};

export default OptionsPage;