type TextType = {
	count:number,
	title:string,
	postText?:string;
}
type weightType={
	count:number | string;
	quantity :string
}
export default interface INyaItem {
	id: number;
	uTitle: string;
	title: string[];
	description:TextType;
	bonus:TextType;
	wMark: weightType;
	dTitle: string[];
	isSelectedText:string;
	isSelected: boolean;
	sales:boolean,
	salesText:string;
	getColor: (isSelected:boolean,isHover:boolean,sales:boolean) => string;
}
