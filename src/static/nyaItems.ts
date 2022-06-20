import INyaItem from "../models/INyaItem";
function getColorCard(isSelected: boolean, isHover: boolean, sales: boolean) {
		if (sales) {
			return "#B3B3B3";
		}
		if (isSelected) {
			if (isHover) {
				return "#E52E7A";
			}
			return "#D91667";
		}
		if (isHover) {
			return "#2EA8E6";
		}
		return "#1698D9";
	}

 const nyaItems:INyaItem[]=[
    {
			id: 0,
			uTitle: "Сказочное заморское яство",
			title: ["Нямушка", "с фуа-гра"],
			description: {count:10,title:"порций" },
			bonus:{count:1,title:"мышь в подарок"},
			wMark: {count:"0.5",quantity :"кг"},
			dTitle: ["Чего сидишь? Порадуй котэ, ", "купи"],
			isSelected: false,
			sales: false,
			salesText: "Печалька, с фуа-гра закончился.",
			isSelectedText: "Печень утки разварная с артишоками.",
			getColor(isSelected: boolean, isHover: boolean, sales: boolean) {
				return getColorCard(isSelected, isHover, sales);
			},
		},
		{
			id: 1,
			uTitle: "Сказочное заморское яство",
			title: ["Нямушка", "с рыбой"],
			description: {count:40,title:"порций" },
			bonus:{count:2,title:"мыши в подарок"},
			wMark: {count:"2",quantity :"кг"},
			sales: false,
			salesText: "Печалька, с рыбой закончился.",
			dTitle: ["Чего сидишь? Порадуй котэ, ", "купи"],
			isSelected: false,
			isSelectedText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
			getColor(isSelected: boolean, isHover: boolean, sales: boolean) {
				return getColorCard(isSelected, isHover, sales);
			},
		},
		{
			id: 2,
			uTitle: "Сказочное заморское яство",
			title: ["Нямушка", "с курой"],
			description: {count:100,title:"порций" },
			bonus:{count:5,title:"мышей в подарок",postText:"заказчик доволен"},
			wMark: {count:"5",quantity :"кг"},
			sales: false,
			salesText: "Печалька, с курой закончился.",
			dTitle: ["Чего сидишь? Порадуй котэ, ", "купи"],
			isSelected: false,
			isSelectedText: "Филе из цыплят с трюфелями в бульоне.",
			getColor(isSelected: boolean, isHover: boolean, sales: boolean) {
				return getColorCard(isSelected, isHover, sales);
			},
		},
]

export default nyaItems;