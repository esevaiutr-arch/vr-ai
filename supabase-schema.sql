-- Run this in Supabase SQL Editor.
create extension if not exists pgcrypto;
create table if not exists public.tasks (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 title text not null,
 due_at timestamptz,
 completed boolean not null default false,
 created_at timestamptz not null default now()
);
create table if not exists public.reminders (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 title text not null,
 remind_at timestamptz not null,
 created_at timestamptz not null default now()
);
alter table public.tasks enable row level security;
alter table public.reminders enable row level security;
create policy "Users manage own tasks" on public.tasks for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "Users manage own reminders" on public.reminders for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
