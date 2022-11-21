type FormTitleProps = {
	title: string;
};

export default function FormTitle({ title }: FormTitleProps) {
	return (
		<div className="flex w-full items-start px-1 py-4">
			<p className="text-sm text-violet-700 font-light">{title}</p>
		</div>
	);
}
