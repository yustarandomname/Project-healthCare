import { writable } from "svelte/store";
import type {SupabaseClient} from "@supabase/supabase-js"

const _supabaseStore: SupabaseClient = null;

export default writable(_supabaseStore);