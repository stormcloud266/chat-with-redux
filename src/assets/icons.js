export const EditIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='prefix__icon prefix__icon-tabler prefix__icon-tabler-edit'
		width={18}
		height={18}
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='#072b7b'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M0 0h24v24H0z' stroke='none' />
		<path d='M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3' />
		<path d='M9 15h3l8.5-8.5a1.5 1.5 0 00-3-3L9 12v3M16 5l3 3' />
	</svg>
)

export const DeleteIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='prefix__icon prefix__icon-tabler prefix__icon-tabler-circle-x'
		width={18}
		height={18}
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='#920e33'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}
	>
		<path d='M0 0h24v24H0z' stroke='none' />
		<circle cx={12} cy={12} r={9} />
		<path d='M10 10l4 4m0-4l-4 4' />
	</svg>
)
