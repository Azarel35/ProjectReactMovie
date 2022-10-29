import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import './MenuTop.scss';

export default function MenuTop() {
	return (
		<div className="menu-top">
			<div className="menu-top__logo">
				<Logo />
			</div>
			<Menu
				theme="dark"
				mode="horizontal"
				items={[
					{
						label: <a href="/">Home</a>,

						key: '1',
					},
					{
						label: <a href="/new-movies">New Movies</a>,
						key: '2',
					},

					{
						label: <a href="/popular">Popular</a>,
						key: '3',
					},
					{
						label: <a href="/search">Search</a>,
						key: '4',
					},
				]}></Menu>
		</div>
	);
}
