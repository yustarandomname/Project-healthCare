<script lang="ts">
  import {createClient} from "@supabase/supabase-js"
  import {SUPABASE_URL, SUPABASE_API_KEY} from "$lib/config"
  import supabase from "$lib/logic/supabaseStore"

  supabase.set(createClient(SUPABASE_URL, SUPABASE_API_KEY))

</script>

<slot></slot>