import React from "react";
import Page from "./page";

const workstyle = () => {
  return (
    <div className='workstyle'>
      <Page pageData={{ currentPage: 1 }} />

      <h2>Workstyle</h2>

      <div className='work-contents'>
        <div className='work-content'>
          <h3>フロントエンド開発</h3>
          <ul>
            <li>WebサイトLP作成</li>
            <li>レスポンシブ対応</li>
            <li>アニメーション作成</li>
            <li>Reactフレームワーク開発</li>
          </ul>
        </div>
        <div className='work-content'>
          <h3>バックエンド開発</h3>
          <ul>
            <li>Nodejsを使った開発</li>
            <li>Mongodb開発</li>
          </ul>
        </div>
        <div className='work-content'>
          <h3>ライブラリ開発</h3>
          <ul>
            <li>Pythonを使った自動化ツール開発</li>
          </ul>
        </div>
      </div>

      <div className='work-condition'>
        <p>
          平日は１～２時間、土日は８時間で１週間１５時間ほど稼働しております。
        </p>
        <p>フロントエンドの開発をメインに活動しております。</p>
      </div>

      <div className='achievement'>
        <div className='achievement-pie-chart'>
          <div className='ahievement-develop'>
            <span className='frontend'>フロントエンド開発</span>
            <span className='backend'>バックエンド開発</span>
            <span className='library'>ライブラリ開発</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default workstyle;
