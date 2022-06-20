
import React, { FC } from "react";
import { NyaCard } from "../../components";
import INyaItem from "../../models/INyaItem";
import staticNyaItems from "../../static/nyaItems";
import "./Main.scss";
const Main: FC = () => {
	const [nyaItems, setNyaItems] = React.useState<INyaItem[]>(staticNyaItems);
	const handleSelectNyaItem = (id: number) => {
		setNyaItems(prevState => {
			return [...prevState].map(nya => {
				if (nya.id === id) {
					let prevSelected = nya.isSelected;
					return { ...nya, isSelected: !prevSelected };
				} else {
					return { ...nya };
				}
			});
		});
	};
	function purchaseCheck() {
		return nyaItems.some(nya => !!nya.isSelected);
	}
	function salesCheck() {
		return nyaItems.some(nya => !!nya.sales);
	}
	const handleBuy = () => {
		let ids = nyaItems.reduce((acc, nya) => {
			// на всякий проверка sales
			if (nya.isSelected && !nya.sales) {
				acc.push(nya.id);
			}
			return acc;
		}, [] as number[]);
		if (ids.length > 0) {
			setNyaItems(prev => {
				return [...prev].map(nya => {
					if (ids.includes(nya.id)) {
						return { ...nya, sales: true, isSelected: false };
					} else {
						return { ...nya };
					}
				});
			});
		}
	};
	const handleReset = () => {
		setNyaItems(staticNyaItems);
	};
	return (
		<div className="main">
			<div className="main__title">Ты сегодня покормил кота?</div>
			<div className="main__nyas">
				{nyaItems.map((nyaItem, idx) => (
					<NyaCard
						handleSelect={handleSelectNyaItem}
						key={`${nyaItem.id}:${idx}`}
						{...nyaItem}
					/>
				))}
			</div>

			<div className="main__feauters">
				{purchaseCheck() && <button onClick={handleBuy}>Купить</button>}
				{salesCheck() && <button onClick={handleReset}>Обновить</button>}
			</div>
		</div>
	);
};

export default Main;
