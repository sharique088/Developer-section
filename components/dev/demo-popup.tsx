import { X } from 'lucide-react';
import React from 'react'

export default function DemoPopUp({ onClose }: {onClose: () => void}) {
	return (
		<div className="fixed inset-0 z-[999] flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center">
			<div className="relative flex h-auto lg:h-[100vh] w-full flex-col overflow-y-auto lg:overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:min-h-[90vh] sm:max-w-[95vw] sm:rounded-3xl md:max-h-[92vh] md:max-w-[90vw] lg:max-w-6xl">
				<button
					onClick={onClose}
					className="absolute right-3 top-2 z-50 flex cursor-pointer items-center justify-center rounded-full bg-black/5 p-1.5 text-lg transition hover:bg-black/10 sm:right-5 sm:p-2 sm:text-xl"
				>
					<X size={14} className="sm:size-[15px]" />
				</button>
			</div>
		</div>
	);
}
