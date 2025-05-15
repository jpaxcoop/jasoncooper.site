'use client';

import { Thumb } from '@/types/thumb';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function handleThumbClick(thumb: Thumb, router: AppRouterInstance): void {
  if (thumb.openInNewTab) {
    window.open(thumb.linkHref, '_blank');
  } else {
    router.push(thumb.linkHref);
  }
}
