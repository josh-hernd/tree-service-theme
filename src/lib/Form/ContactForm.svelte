<script lang="ts">
	import type { InputField } from '$lib/types/ComponentTypes';
	import { isRequired } from './helpers/Logic';

	export let fields: InputField[];

	let _FormEl: InputField['attributes'];
	let success = false;
	let failed = false;
	let messages: string;
	let resStatus: number;

	async function onSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);

		const data = Object.fromEntries(formData);
		console.log(data);

		const Timeout = (time: number) => {
			let controller = new AbortController();
			setTimeout(() => controller.abort(), time * 1000);
			return controller;
		};

		const endpoint = '/api/post';

		const options = {
			signal: Timeout(5).signal,
			method: 'POST',
			headers: {
				Accept: '*/*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		};

		fetch(endpoint, options)
			.then((response) => {
				if (!response.ok) {
					if (response.status === 403) {
						messages = 'Sorry! Spam messages are not accepted.';
					} else {
						messages = 'Sorry we are having issues sending your message.';
					}
					failed = true;
					resStatus = response.status;
					throw new Error('Network response was not OK');
				}

				return response;
			})
			.then((response) => response.json())
			.then((response) => {
				messages = 'Message was sent!';
				success = true;
				_FormEl = response;
			})
			.catch((error) => {
				return error;
			});
	}
</script>

<div class="formWrap">
	{#if success}
		<h2>{messages}</h2>
		{#if import.meta.env.DEV}
			<pre>
					{JSON.stringify(_FormEl, null, 2)}
				</pre>
		{/if}
	{/if}

	{#if failed}
		<h2 class="error">{messages}</h2>
		{#if import.meta.env.DEV}
			<pre>
			{JSON.stringify(resStatus, null, 2)}
		</pre>
		{/if}
	{/if}
	{#if !success && !failed}
		<form on:submit|preventDefault={onSubmit}>
			<div class="flexFields">
				{#each fields as field, i}
					{#if field.type == 'input'}
						<div class="field">
							<input
								type={field.attributes.type}
								name={field.name}
								id={field.attributes.id}
								value={field.value}
								required={isRequired(field)}
							/>
							<label for={field.name} placeholder={field.attributes.label}
								>{field.attributes.label}</label
							>
						</div>
					{:else if field.type == 'textarea'}
						<div class="field full">
							<textarea name={field.name} id={field.attributes.id} cols="30" rows="10" />
							<label for={field.name} placeholder={field.attributes.label}
								>{field.attributes.label}</label
							>
						</div>
					{/if}
				{/each}
			</div>
			<div style="position: relative; display:none;">
				<label for="honeypot">honeypot</label>
				<input type="text" name="honeypot" id="honeypot" />
			</div>
			<div class="conditions">
				<p>Copyright © Randy's Tree Service. By submiting you are agreing to our Terms and Conditions.</p>
			</div>
			
			<input type="submit" value="Submit" />
		</form>
	{/if}
</div>

<style lang="sass">
@use '../../abstracts/BreakPoints' as *

.formWrap
	width: 100%
	height: 100%
	padding: 20px
	background: #FFFFFF
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1)

.flexFields
	width: 100%
	display: flex
	flex-wrap: wrap
		
.field
	width: calc( (100% - 32px) / 2 )
	position: relative
	margin: 12px 8px 22px
	@include dynamicpoint( $max: 850px)
		width: 100%
.full
	width: 100%
	
input, textarea
	width: 100%
	padding: 17px 18px
	font-weight: 500
	font-size: 14.5px
	line-height: 18px
	border-color: var(--palette-bodyBlack-100)
	border-radius: 0
	color: var(--palette-bodyBlack-500)
	border-style: solid

input + label,
textarea + label
	margin: -10px 18px

input:focus:invalid + label
	color: var(--palette-orange-600)

input[type="submit"]
	--btn-alignment: 10px auto auto
	width: 100%
	margin: var(--btn-alignment)
	font-family: 'Work Sans', sans-serif
	font-weight: 700
	font-size: 18px
	line-height: 160%
	text-decoration: none
	padding: 10px 30px
	display: block
	color: var(--palette-pasteWhite-500)
	background: var(--palette-orange-600)
	border: none
	border-radius: 3px
	box-shadow: 0px 5px 20px 0px var(--palette-orange-600)
	transition: var(--global-animation)
	&:hover
		background: var(--palette-orange-500)
		box-shadow: 0px 0px 20px 0px var(--palette-orange-500)
		transform: scale(1.01)

.conditions
	text-align: center
	margin: 0px 0px 25px
	p
		font-size: 12px

label
	font-weight: 500
	font-size: 14.5px
	line-height: 18px
	color: var(--palette-bodyBlack-500)
	position: absolute
	top: 0
	left: 0
	padding: 0px 5px
	margin: 17px 18px
	background: #fff
	pointer-events: none
	user-select: none
	-webkit-transition: all 250ms ease-in-out
	-o-transition: all 250ms ease-in-out
	transition: all 250ms ease-in-out

.error
	color: var(--palette-orange-600)
</style>
