import { SpinnerIcon } from '@/components/common/icons'

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-20">
      <SpinnerIcon className="stroke-primary" />
    </div>
  )
}
