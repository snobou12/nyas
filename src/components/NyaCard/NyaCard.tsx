
import classNames from "classnames";
import React, { FC } from "react";
import INyaItem from "../../models/INyaItem";

import "./NyaCard.scss";
type Props = {
	handleSelect: (id: number) => void;
};
const NyaCard: FC<INyaItem & Props> = ({
	isSelectedText,
	handleSelect,
	id,
	uTitle,
	title,
	description,
	wMark,
	sales,
	salesText,
	dTitle,
	isSelected,
	bonus,
	getColor,
}) => {
    const [isHover,setIsHover]=React.useState<boolean>(false);
	const nyaColorVar = {
		"--clr":  getColor(isSelected,isHover,sales),
	} as React.CSSProperties;
	return (
		<div  style={nyaColorVar} className="nya__card">
			<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}  className="nya__border">
				<div  onClick={() => handleSelect(id)} className={classNames("nya",{
					"nya--sales":sales
				})}>
					<div className="nya__utitle">{uTitle}</div>
					<div className="nya__title">
						<span>{title[0]}</span>
						<span>{title[1]}</span>
					</div>
					<div className="nya__description">
						<span><b>{description.count}</b> {description.title}</span>
						<span>{bonus.count > 1 && <b>{bonus.count}</b>} {bonus.title}</span>
						{bonus.postText && <span>{bonus.postText}</span>}
					</div>
					<div  className="nya__wmark">
						<span>{wMark.count}</span>
						<span>{wMark.quantity}</span>
					</div>
				</div>
			</div>
			{sales ? (
				<div className={classNames("nya__dtitle",{
					"nya__dtitle--sales":sales
				})} >{salesText}</div>
			) : isSelected ? (
				<div className="nya__dtitle">{isSelectedText}</div>
				
			) : <div className="nya__dtitle">
					{dTitle[0]}
					<span>
						<span onClick={() => handleSelect(id)}>{dTitle[1]}</span>.
					</span>
				</div>}

		</div>
	);
};

export default NyaCard;
