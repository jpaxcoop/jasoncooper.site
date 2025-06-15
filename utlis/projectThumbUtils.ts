'use client';

import { ProjectThumb } from '@/types/project-thumb';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function handleClick(thumb: ProjectThumb, router: AppRouterInstance): void {
  if (!thumb.linkHref) {
    return;
  }

  if (thumb.openInNewTab) {
    window.open(thumb.linkHref, '_blank');
  } else {
    router.push(thumb.linkHref);
  }
}
